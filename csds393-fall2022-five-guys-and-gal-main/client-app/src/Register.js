import {useState, useContext} from 'react';
import axios from 'axios';
import UserContext from "./UserContext";
import {Navigate} from "react-router-dom";

function Register() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [navigate,setNavigate] = useState(false);
  const [registerError,setRegisterError] = useState(false);

  const user = useContext(UserContext);

  function registerUser(e) {
    e.preventDefault();

    const data = {email,password};
    axios.post("http://localhost:4000/register", data, {withCredentials:true})
      .then(response => {
        console.log('running here during error');
        user.setEmail(response.data.email);
        setEmail('');
        setPassword('');
        setRegisterError(false);
        setNavigate(true);
      })
      .catch(()=>{
        setRegisterError(true);
      });
  }

  if (navigate) {
    return <Navigate to={'/'} />
  }

  return (
    <form action="" onSubmit={e => registerUser(e)}>
      {registerError && (
        <div className="redText"> Email already registered. Please log in or use a new email</div>
      )}
      <input className='form-control' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/><br />
      <input className='form-control' type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/><br />
      <button className='btn btn-primary' type="submit">Register</button>
    </form>
  );
}

export default Register;