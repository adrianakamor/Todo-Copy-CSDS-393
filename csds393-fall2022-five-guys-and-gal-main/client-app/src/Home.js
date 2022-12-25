import {useContext, useEffect, useState} from "react";
import UserContext from "./UserContext";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toastr from 'toastr';
import moment from 'moment';

function Home() {
  const userInfo = useContext(UserContext);
  const [inputVal, setInputVal] = useState('');
  const [todos,setTodos] = useState([]);
  const [inputDate, setInputDate] = useState('');
  const [inputTime, setInputTime] = useState('');
  const [sortType, setSortType] = useState('unsorted');
  const [eventType, setEventType] = useState('general');


  useEffect(() => {
    axios.get('http://localhost:4000/todos', {withCredentials:true})
      .then(
        (response) => {
          
          /* Save temp data */
          let tempTodos = response.data;

          /* Array by selection type function */
          const sortArray = type => {

            /* Sort todos by time */
            if (type === 'date'){
              const sortedTodos = tempTodos.sort((a,b)=>{
                let aMoment = moment(a.dtime,'MM/DD/YYYY hh:mm');
                let bMoment = moment(b.dtime,'MM/DD/YYYY hh:mm');
                return moment(aMoment.diff(bMoment));
              })
              setTodos(sortedTodos); //set state
            }
            else{
              setTodos(tempTodos);
            }

          };
          sortArray(sortType); //call sort w sortType
      },()=>{
        console.log("No tasks");
      })
  }, [sortType]);

  if (!userInfo.email) {
    return <div style={{color:"white !important"}} className = "whiteText"> Please log in to see this page </div>
  }

  function addTodo(e) {
    e.preventDefault();
    if (!isValid()) return;
    const nonFormatDated = inputDate+ " "+inputTime;
    let formatedDate = moment(nonFormatDated, "YYYY-MM-DD hh:ss");
    formatedDate = formatedDate.format("MM/DD/YYYY hh:mm");
    axios.put('http://localhost:4000/todos', {text:inputVal, dtime:formatedDate, eType:eventType}, {withCredentials:true})
      .then(
        (response) => {
        
        /** Concact new todo w/ old todos */
        let tempTodos = [...todos].concat(response.data);
        /** If sort type is date */
        if (tempTodos.length > 1 && sortType =='date'){
          const sortedTodos = tempTodos.sort((a,b)=>{
            let aMoment = moment(a.dtime,'MM/DD/YYYY hh:mm');
            let bMoment = moment(b.dtime,'MM/DD/YYYY hh:mm');
            return moment(aMoment.diff(bMoment));
          })
          setTodos(sortedTodos);
        }
        else{
          setTodos(tempTodos);
        }
        setInputVal('');
        setInputTime('');
        setInputDate('');
      },()=>{
        console.log("Cannot add Todo");
      });
  }
    
  function deleteTodo(todo) {
    const data = {id:todo._id, delete:true};
    axios.post('http://localhost:4000/todos', data, {withCredentials:true})
      .then(() => {
        const newTodos = todos.filter(t => {
          return t._id !== todo._id;
        });
        setTodos([...newTodos]);
      });
  }

  function updateTodo(todo) {
    const data = {id:todo._id,done:!todo.done, delete:false};
    axios.post('http://localhost:4000/todos', data, {withCredentials:true})
      .then(() => {
        const newTodos = todos.map(t => {
          if (t._id === todo._id) {
            t.done = !t.done;
          }
          return t;
        });
        setTodos([...newTodos]);
      });
  }
    
  function isValid(){

    let valid = true;
    
    if (!inputVal){
      valid = false;
      toastr.error("Please write a description");
    }
    if (inputTime.length < 5){
      valid = false;
      toastr.error("Pick a valid time");
    }
    if(inputDate.length < 10){
      valid = false;
      toastr.error("Pick a valid date")
    }

    return valid;
  }

  return <div>
    <form>
      <h4 style={{color:"white !important"}}>What todo?</h4>
      <input placeholder={'Description'}
              className='form-control'
              type='text'
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              /> 
      <input placeholder={'Pick a date'}
              className='form-control'
              type='date'
              value={inputDate}
              onChange={e => setInputDate(e.target.value)}
              />
      <input placeholder={'Pick a time'}
              className='form-control'
              value={inputTime}
              type='time'
              onChange={e => setInputTime(e.target.value)}
              />
      <select className="form-select" onChange={(e) => setEventType(e.target.value)}>
            <option value="general">General</option>
            <option value="assignment">Assignment</option>
            <option value="exam">Exam</option>
            <option value="vacation">Vacation </option>
      </select>
      <button className="btn btn-primary" type="submit" onClick={e => addTodo(e)}>Submit Task</button>
      <div className="row">
        <div className="col-sm-2 ">
        <h5> Sort By<FontAwesomeIcon icon="fa-solid fa-arrows-up-down" /> </h5>
        </div>
        <div className="col-sm-10">
          <select className="form-select" onChange={(e) => setSortType(e.target.value)}>
            <option value="unsorted">Time Created</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>
    </form>
    
    {todos.map(todo => (
        <div key={todo._id} className="card" style={{backgroundColor:"salmon !important"}}>
          <div className="row">
            <div className = "col-sm-2">
              {todo.eType == 'assignment' && <p> Assignment <FontAwesomeIcon icon="fa-solid fa-book" /></p>}
              {todo.eType == 'general' && <p>General <FontAwesomeIcon icon="fa-solid fa-list-check" /></p>}
              {todo.eType == 'exam' && <p>Exam <FontAwesomeIcon icon="fa-solid fa-file-circle-exclamation" /></p>}
              {todo.eType == 'vacation' && <p>Vacation <FontAwesomeIcon icon="fa-solid fa-plane-departure"/></p>}
              <p>{todo.dtime}</p>
            </div>
            <div className="col-sm-2" /> 
            <div className="col-sm-4">
              <div>
              <input type={'checkbox'}
                    checked={todo.done}
                    onChange={() => updateTodo(todo)}
              />
              </div>
              {todo.done ? <del>{todo.text}</del> : todo.text}
              <div><button type="button" className="btn" onClick={()=> deleteTodo(todo)}><FontAwesomeIcon icon="fa-solid fa-trash" size="sm" /></button> </div>
            </div>
            <div className="col-sm-4" />
          </div>
        </div>
    ))}
    
  </div>
}

export default Home;
