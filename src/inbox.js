import addTaskForm from "./task";
import { myTask , tasks} from "./task";

function inboxPage(){
    const pageContent = document.querySelector('.pageContent');
    
    //const taskContent = document.querySelector('.taskContent');

   addTaskForm();
  pageContent.appendChild(taskPlus());
    


     
}

export function taskPlus(){
    const addTask = document.createElement('h1');
    addTask.classList.add('taskPlus');
    addTask.textContent= '+ Add Task';
    addTaskForm();
    const taskFormDisplay= document.querySelector('.taskFormDisplay');
    addTask.addEventListener('click', () =>{
       taskFormDisplay.style.display='block'
    })
    return addTask;
}
export default inboxPage;