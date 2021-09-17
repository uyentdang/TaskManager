// Should be deleted
let taskManager = new TaskManager();
const errorBox = document.querySelector('.error-box');
const inputFields = document.querySelectorAll('.form-control');
// Should be deleted -----

function validFormFieldInput(){
    //should be deleted
    const newTaskNameInput = document.getElementById('taskName');
    const taskName = newTaskNameInput.value;
    const newTaskDescription = document.getElementById('taskDescription');
    const description = newTaskDescription.value;
    const assignedToInput = document.getElementById('assign');
    const assignedTo = assignedToInput.value;
    const newDateInput = document.getElementById('dueDate');
    const date = newDateInput.value;
    //should be deleted -----

    let isError = false;
    inputFields.forEach(field => {
        field.classList.remove('error');
    });
    inputFields.forEach(field => {
        if(field.value === '') {
            field.classList.add('error'); 
            isError = true;
        }
    });
    if (isError === true) {
        errorBox.style.top = '20px';
    }
    taskManager.addTask(taskName, description, assignedTo, date );
    console.log(taskManager.tasks);
}

const addTaskButton = document.getElementById('add-task-button');
addTaskButton.addEventListener('click', validFormFieldInput);

const errorCloseBtn = document.querySelector('.close-btn');
errorCloseBtn.addEventListener('click', () => {
    errorBox.style.top = '-400px';
});

// Should be deleted
// console.log(test.tasks);
// Should be deleted -----