let taskManager = new TaskManager();
taskManager.load();
taskManager.render();
const errorBox = document.querySelector('.error-box');
const inputFields = document.querySelectorAll('.form-control');
const inputForm = document.querySelector('.input-form');
function validFormFieldInput() {
  const newTaskNameInput = document.getElementById('taskName');
  const taskName = newTaskNameInput.value;
  const newTaskDescription = document.getElementById('taskDescription');
  const description = newTaskDescription.value;
  const assignedToInput = document.getElementById('assign');
  const assignedTo = assignedToInput.value;
  const newDateInput = document.getElementById('dueDate');
  const date = newDateInput.value;

  let isError = false;
  inputFields.forEach((field) => {
    field.classList.remove('alert-danger');
  });
  inputFields.forEach((field) => {
    if (field.value === '') {
      field.classList.add('alert-danger');
      isError = true;
    }
  });
  if (isError === true) {
    errorBox.style.top = '20px';
    return false;
  }
  taskManager.addTask(taskName, description, assignedTo, date);
  taskManager.save();
  taskManager.render();
  inputForm.reset();
}

const addTaskButton = document.getElementById('add-task-button');
addTaskButton.addEventListener('click', validFormFieldInput);

const errorCloseBtn = document.querySelector('.close-btn');
errorCloseBtn.addEventListener('click', () => {
  errorBox.style.top = '-400px';
});

let taskList = document.querySelector('#list-container');

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('done-button')) {
    let parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement;
    let taskId = parseInt(parentTask.id);
    let task = taskManager.getTaskById(taskId);
    task.status = 'Done';
    taskManager.save();
    taskManager.render();
  }

  if (event.target.classList.contains('delete-button')) {
    let parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement
        .parentElement.parentElement;
    let taskId = parseInt(parentTask.id);
    taskManager.deleteTask(taskId);
    taskManager.save();
    taskManager.render();
  }  
});


