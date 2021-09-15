function validFormFieldInput(){
    const newTaskNameInput = document.getElementById('taskName');
    const taskName = newTaskNameInput.value;
    const newTaskDescription = document.getElementById('taskDescription');
    const description = newTaskDescription.value;
    const assignedToInput = document.getElementById('assign');
    const assignedTo = assignedToInput.value;
    const newDateInput = document.getElementById('dueDate');
    const date = newDateInput.value;
   

    if(taskName == ''){
        newTaskNameInput.classList.add('alert-danger');
    
    }
    if( description == ''){
        newTaskDescription.classList.add('alert-danger');
       
    }
    if(assignedTo == ''){
        assignedToInput.classList.add('alert-danger');
      
    }
    if(date == ''){
        newDateInput.classList.add('alert-danger');
        setTimeout(() => {
            alert('Please fill in the required fields')}, 0);
            return false;
    }
    console.log(taskName + ' ' + description + ' ' + date + ' ' + assignedTo);
}

const addTaskButton = document.getElementById('add-task-button');
addTaskButton.addEventListener('click', validFormFieldInput);