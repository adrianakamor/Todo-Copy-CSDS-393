# Todo: Student Planner To-do List
## User Manual
### CSDS 393 - Five Guys and Gal
#### Leonardo Rodriguez, Adriana Kamor, Addy Krom, Ethan Ho, Kamsiochukwu Eneh, William Huang

# 1 - Instructions
## 1.1. - Overview
  Welcome to Todo, the smarter planner application for students. This user manual has sections for setting up and using your account, troubleshooting, and information about the GitHub repository for this product. Todo's capabilities include the ability to add and delete tasks, assign and sort tasks by date and time, and label tasks under an event category. In order to save your data and keep your list private, you will need to register with an account and log in to the application. 

## 1.2. - Accessing the Application
  To access the application, use the link https://whispering-gorge-40839.herokuapp.com/ in your web browser. After a few seconds, the Todo application should load and be ready for use.

## 1.3. - Creating an Account
  Before being able to create you own planner list, you will need to register for an account on Todo. When opening Todo, for the first time, you will see that the home page displays the message "Your need to be logged in to see this page." This is because you are not logged into an account. To register, navigate to the Register page using the buttons located at the top of the page. This should bring you to a page with 2 fill-in fields, the first being for an email and the second for a password. In the respective fields, enter an email you would like the account to be linked to and create a password for your account. Once typed in, hit the blue Register button at the bottom of the page to register your account.
  
## 1.5. - Logging In
  To log in with you account information, navigate to the Login page using the buttons at the top of the page. Enter the email you used to register and the password you created for your account in the respective boxes, and click the blue Log In button at the bottom of the page. After clicking the Log In Button, the application will automatically bring you to the Home page, which should now have the title What todo? along with multiple boxes for adding in task information.
  
## 1.6. - Navigating Application Functionality
### 1.6.1. Adding Tasks
  Once logged in and on the Home page, you will now see various boxes. To create a task, you must fill in all of these boxes with their respective values in order to successfully add the task to you list. First, in the Description box, type in the name or label of your desired task. For the next box, you must choose a due date for your task. To add a due date, click the calendar icon on the right of your screen, and once clicked a date picker should appear on the left of you screen. From this point, click on your desired date and the date box will automatically update with your selection. In the next box, you will choose a due time for your task. Similar to the due date, you need to click the clock icon on the left side of the button which will pull up a time picker. Once you have chosen a time, you can exit the time picker by clicking any blank space on the application. The last box features a drop down of mutiple categories under which you can classify your task. Click anywhere in the box and select a category, after which the drop down menu will automatically close. Once all of these fields are filled out, you may hit the blue Submit Task button to add your task to the list. Once clicked, you should see your task appear in the list below the entry fields.
  
 ### 1.6.2. Completing Tasks
  If you have completed a task in your Todo list, you can mark the task off by clicking the square box that appears at the top center of each task. Once clicked, your task will be crossed off the the box at the top of the task will be checked off, denoting that this task has been completed.
 
 ### 1.6.3. Deleting Tasks
  If a task is no longer applicable, canceled, or you wish to get ride of it, you have the option to delete your tasks. In order to do this, click on the trash can icon that appears at the bottom center of each task. Once clicked, you task will be deleted. Be careful, as this feature permanently deletes tasks from your list. 

### 1.6.4. Sorting Tasks
  With Todo, you have two ways to view your Todo list. This first of which is by the time each task was created, and the second is in order of ascending due date. In order to sort your list, you should see the Sort By label next to a box that either says Time Created or Date. By clicking on this box, a drop down menu will appear with both the Time Created and Date choices. To sort your list in the order of which you added tasks, choose the Time Created option. To sort your list in order of ascending due dates, choose the Date option. After clicking one of these options, the drop down menu will automatically close and your list will automatically sort itself according to the sorting choice you made.

# 2 - Troubleshooting
## 2.1. Application Loading Issue
  Because this application is hosted on a third party website, there may be a delay in terms of the application loading on the user's end. However, if the application does not load after a minute, close out of the application completely. Make sure to check that you have a stable internet connection and retry the link to the application. If this happens repeatedly, please reach out to one of the contributers listed at the top of the user manual. 
  
## 2.2. Task Not Being Added
  If a task is not being added and you see error warnings appearing on your screen, this is because you did not fill out one of the neccessary fields required to add a task. Todo requires you to fill out all fields including Description, Date, and Time in order to add a task to your list.

# 3 - Repository
## 3.1. Navigation
  To access the repository, use the following link: https://github.com/cwru-courses/csds393-fall2022-five-guys-and-gal.git. To view the user manual/README file in a separate window, click on README.md in the repository. There are two main folders in our repository: api and client-app. As inferenced by their names. api contains all neccessary API, code, schema, and database information to create the application interface and base while client-app is where the styling and app functionality can be found. Within client-app, there are two folders. The first one, public, is imported files from the initial setup of the React app, and the second one, src, is where a majority of the product's code is found. 
  
## 3.2. Scrum Board
  To view the Scrum board used throughout the creation of this application, you can view it through the following link: https://github.com/orgs/cwru-courses/projects/6. In this Scrum board, you are able to see the tasks, acceptance criteria, sprint layout, and story points of each user story that was made to complete this product's functionality. 

