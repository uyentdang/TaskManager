

function createTaskHtml (name, description, assignedTo, dueDate, status){
    const html = `
    <li class="list-group-item">
    <div class = "col ml-4">
    <div class = "row">
      <div class = "card bg-light mb-3">
      <div class ="card-header">${name}</div>
      <div class="card-body">
        <div class ="row">
          <div class="col">
        <p class="card-subtitle mb-2 text-muted">Assigned to: ${assignedTo} </p>
        </div>
        <div class ="col">
        <p class="card-subtitle mb-2 text-muted">${dueDate} </p>
        </div>
        </div>
        <h6 class="card-text">${description}</h6>
        <div class="dropdown">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Status
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Completed</a>
            <a class="dropdown-item" href="#">Pending</a>
            <a class="dropdown-item" href="#">Urgent</a>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </li>`
    return html;
} 

// should be deleted
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate, status) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };

        this.tasks.push(task);
    }

//should be deleted-----

    render(){
        const tasksHtmlList = [];
        for(let i=0; i<this.tasks.length; i++){
            let task = this.tasks[i];
            let date = new Date(task.dueDate);
            let formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            let tasksHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
            tasksHtmlList.push(tasksHtml);
        }
        let tasksHtml = tasksHtmlList.join('\n');
        document.getElementById('list-container').innerHTML = tasksHtml;

    }
}
