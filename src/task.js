
import './style.css';


let tasks =[];

function addTaskForm(){

    const pageContent = document.querySelector('.pageContent');
    const taskFormDisplay = document.createElement('div');
    taskFormDisplay.classList.add('taskFormDisplay');
    const newTask = document.createElement('h2');
    newTask.classList.add('newTask');
    newTask.textContent= 'New Task';
    taskFormDisplay.appendChild(newTask);

    const taskForm = document.createElement('form');
    taskForm.classList.add('taskForm');

// Task Title Input
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Task Title:';
    titleLabel.style.fontWeight = 'bold'; // Set label text to bold
    const taskTitle = document.createElement('input');
    taskTitle.classList.add('taskTitle');
    taskTitle.type = 'text';
    taskTitle.name = 'taskTitle';
    taskTitle.required = true;
    taskTitle.placeholder = 'Task Title';

    // Task Description Input
    const taskDesc = document.createElement('input');
    taskDesc.classList.add('taskDesc');
    taskDesc.type = 'text';
    taskDesc.name = 'taskDesc';
    taskDesc.required = false;
    taskDesc.placeholder = 'Description';


// Due Date Input

    const dueDateInput = document.createElement('input');
    dueDateInput.classList.add('dueDate');
    dueDateInput.type = 'date';
    dueDateInput.name = 'dueDate';
    dueDateInput.required = true;
    dueDateInput.placeholder = 'Due date';

// Priority Dropdown Menu
    const prioritySelect = document.createElement('select');
    prioritySelect.classList.add('priority');
    prioritySelect.name = 'priority';
    const highOption = document.createElement('option');
    highOption.value = 'high';
    highOption.textContent = 'High';
    const mediumOption = document.createElement('option');
    mediumOption.value = 'medium';
    mediumOption.textContent = 'Medium';
    const lowOption = document.createElement('option');
    lowOption.value = 'low';
    lowOption.textContent = 'Low';
    prioritySelect.placeholder = 'Priority';
    prioritySelect.appendChild(highOption);
    prioritySelect.appendChild(mediumOption);
    prioritySelect.appendChild(lowOption);

// Due Date and Priority Container
    const fieldContainer = document.createElement('div');
    fieldContainer.classList.add('fieldContainer');
    fieldContainer.appendChild(dueDateInput);
    fieldContainer.appendChild(prioritySelect);

// ... (Previous code)

// Add Task Button
    const addButton = document.createElement('button');
    addButton.type = 'submit';
    addButton.textContent = 'Add Task';
    addButton.classList.add('addtaskBtn')
// Cancel Button
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel');

// Button Container
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');
    buttonContainer.appendChild(cancelButton);
    buttonContainer.appendChild(addButton);

// Append all elements to the form

    taskForm.appendChild(taskTitle);
    taskForm.appendChild(taskDesc);
    taskForm.appendChild(fieldContainer); // Append the Due Date and Priority container
    taskForm.appendChild(buttonContainer); // Append the button container


    taskFormDisplay.appendChild(taskForm);

    pageContent.appendChild(taskFormDisplay);


    addButton.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent form submission
      
          // Get the input values from the form
          const title = taskTitle.value;
          const desc = taskDesc.value;
          const dueDate = dueDateInput.value;
          const priority = prioritySelect.value;
      
          // Create a new task object using the 'book' constructor function
          const newTask = new taskInfo(title, desc, dueDate, priority);
      
          // Push the new task to the 'tasks' array
          tasks.push(newTask);
      
          // Optional: Display the newly added task in the console
          console.log(newTask);
      
          // Optional: Clear the form inputs after submission
          taskTitle.value = '';
          taskDesc.value = '';
          dueDateInput.value = '';
          prioritySelect.value = 'high'; // Set a default priority value
      
          // Optional: Hide the form after submission
          taskFormDisplay.style.display = 'none';
          myTask()

        });
      
      cancelButton.addEventListener('click', () =>{
        taskTitle.value = '';
          taskDesc.value = '';
          dueDateInput.value = '';
          prioritySelect.value = 'high'; // Set a default priority value
      
          // Optional: Hide the form after submission
          taskFormDisplay.style.display = 'none';
      })
     

      
}

function taskInfo(title, desc, dueDate, priority) {
    this.title = title;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
}


function createTaskElement(container, task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('taskElement');
  
    const titleElement = document.createElement('h3');
    titleElement.textContent = `Title: ${task.title}`;
    titleElement.classList.add('titleElement');
  
    const descElement = document.createElement('p');
    descElement.textContent = `Description: ${task.desc}`;
    descElement.classList.add('descElement');
    const dueDateElement = document.createElement('p');
    dueDateElement.textContent = `Due Date: ${task.dueDate}`;
    dueDateElement.classList.add('dueDateElement')
  
    const priorityElement = document.createElement('p');
    priorityElement.textContent = `Priority: ${task.priority}`;
  
    // Append all elements to the taskElement
    taskElement.appendChild(titleElement);
    taskElement.appendChild(descElement);
    taskElement.appendChild(dueDateElement);
    taskElement.appendChild(priorityElement);
  
    // Append the taskElement to the specified container
    container.appendChild(taskElement);
  }
  
  export function myTask() {
    const taskContent = document.createElement('div');
    taskContent.classList.add('taskContent');
  
    // Loop through the tasks array and create elements for each task
    
      createTaskElement(taskContent, tasks[tasks.length - 1]);
    // Optional: Display the taskContent in the console
    console.log(taskContent);
  
    // Append the taskContent to the page
    const pageContent = document.querySelector('.pageContent');
    pageContent.appendChild(taskContent);
  }


export default addTaskForm;