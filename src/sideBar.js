import './style.css'
import inboxPage from './inbox';
import y from './Upcoming';
import addTaskForm from './task';
 

 function sideBar(){
    //const content = document.querySelector('#content');
    const pageContent = document.querySelector('.pageContent');
    const sideBar = document.querySelector('.sideBar');
    const displayinbox = document.createElement('h3');
    displayinbox.classList.add('displayInbox');
    displayinbox.textContent= 'Inbox';
    sideBar.appendChild(displayinbox);
    const displayToday = document.createElement('h3');
    displayToday.classList.add('displayToday');
    displayToday.textContent= 'Today';
    sideBar.appendChild(displayToday);
    const displayUpcoming = document.createElement('h3');
    displayUpcoming.classList.add('displayUpcomming');
    displayUpcoming.textContent= 'Upcoming';
    sideBar.appendChild(displayUpcoming);
    

    displayinbox.addEventListener('click', ()=>{
        pageContent.innerHTML = '';
        addTaskForm()
        inboxPage();
           
    })

    displayUpcoming.addEventListener('click', ()=>{
        pageContent.innerHTML = '';
        y();
        
    })

    displayToday.addEventListener('click', ()=>{
        
    });

    //content.appendChild(sideBar);



}



export default sideBar;