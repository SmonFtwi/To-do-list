
import addTaskForm from './task';
import inboxPage from "./inbox";
import sideBar from "./sideBar";



function intialize(){

    const content = document.querySelector('#content');
    inboxPage();
    sideBar();
    
    //addTaskForm();
  
}

export default intialize;