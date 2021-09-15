
const errorBox = document.querySelector('.error-box');
const inputFields = document.querySelectorAll('.form-control');

function validFormFieldInput(){
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
}

const addTaskButton = document.getElementById('add-task-button');
addTaskButton.addEventListener('click', validFormFieldInput);

const errorCloseBtn = document.querySelector('.close-btn');
errorCloseBtn.addEventListener('click', () => {
    errorBox.style.top = '-400px';
});