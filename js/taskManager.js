

function createTaskHtml (id, name, description, assignedTo, dueDate, status){
    const html = `
    <li class="list-group-item" id = "${id}">
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
          <div class="col">
          <p class="card-subtitle mb-2 text-muted">Status: ${status} </p>
        </div>
        
        <div>
          <button class="btn btn-secondary done-button" type="button" id="mark-done-button">Mark as Done</button>
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
            let tasksHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
            tasksHtmlList.push(tasksHtml);
            console.log (tasksHtml);
        }
        let tasksHtml = tasksHtmlList.join('\n');
        document.getElementById('list-container').innerHTML = tasksHtml;

    }

    getTaskById(taskId){
      let foundTask;
      for(let i = 0; i<this.tasks.length; i++){
        let task = this.tasks[i];
        if(taskId == task.id){
          foundTask = task;
        }
      }
      return foundTask;
    }
}
