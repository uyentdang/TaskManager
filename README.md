
<!-- Task 1 & 2  -->

### What We Have Done So Far:
Task2 step 0, Task 2 step 1


### Pending Tasks:
# Task 1 Design your App Wireframes - Markabo Hassan


# Task 2: Implement your Wireframes using Bootstrap

### Step 2: Implementing your Task Planner Wireframes

Go through the different [Bootstrap components](https://getbootstrap.com/docs/4.5/components/alerts/) and select the ones that are more similar
to your wireframes structure created on Task 1.

1. Add the selected components to your HTML page.
2. Implement your Task planner form that contains the required fields:
* Name
* Description
* AssignedTo
* DueDate
* Status


<!-- Task-3 -->

# Task 3: Create a Task Card layout and a Task List component

## Description

Implement the card layout bootstrap component that contains the task information:
* Name
* Description
* AssignedTo
* DueDate
* Status

> #### Tools
> - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
> - [Bootstrap](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)


## Walkthrough

### Step 1: Implement the task Card layout

In this step, we'll create a basic structure of a card with the task's information

1. Add a new sample [card](https://getbootstrap.com/docs/4.5/components/card/) to the `index.html`.
2. Add field inside the card for the task name.
3. Add field inside the card for the task description.
4. Add field inside the card for the task assigned to.
5. Add field inside the card for the task due date.

### Step 2: Implementing the task list

1. Add a [list group](https://getbootstrap.com/docs/4.5/components/list-group/) to the `index.html`.
2. Add your sample task card inside the list.

### Step 3: Adding your sample data

1. Create 5 different task examples.
2. Add your 5 cards inside the list group created on step 2.

> #### Test Your Code!
> Now is a good chance to test your page, open your `index.html` on your favorite browser and verify that the tasks list is displayed correctly.


## Results

We've now created the basic structure to represent a task and the list to group them.

Your task should meet the assesment criteria in the **Final Project - Scorecard Rubric**.

## Example

Stuck? Check out the provided example in the [example/](example/) folder!





<!-- Task-4 -->


# Task 4: Task Form Inputs Validation

## Description

Implement a form that captures the fields required to create a task.


> #### Tools
> - [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
> - [Bootstrap](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
> - [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
      
    
## Walkthrough

### Step 1: Add a task form

In this step, we'll add a form to create a new task.

1. Add a button to submit your form.

> #### Useful Resources for this step
> - [Forms](https://getbootstrap.com/docs/4.5/components/forms/)
> - [Buttons](https://getbootstrap.com/docs/4.5/components/buttons/) 

### Step 2: Implement a JavaScript function to validate your form fields

1. Create a JavaScript file named `index.js` and include it into your `index.html` page.
2. Implement a JavaScript function named `validFormFieldInput(data)`
3. Add an ID attribute to each form field and implement the code needed to retrieve the each form field value using the following method:
      ```javascript
       const newTaskNameInput = document.querySelector('#newTaskNameInput');
       const name = newTaskNameInput.value;
      ```
4. Log your field inputs to verify that you are getting the data you need to validate.
      ```javascript
       const newTaskNameInput = document.querySelector('#newTaskNameInput');
       const name = newTaskNameInput.value;
       console.log("name:  "+name);
      ```
> #### Useful Resources for this step
> - [Forms](https://getbootstrap.com/docs/4.5/components/forms/)
> - [Query selector documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)


### Step 3: Showing errors to users

1. Add a [Bootstrap alert component](https://getbootstrap.com/docs/4.5/components/alerts/) inside your form to display the errors to the users.
2. Add the logic to display or hide the error message when the form is submited.
3. Display a meaningful error when a form filed is invalid and the user clicks the submit button.
4. Add the logic to hide the error message when the user clicks the submit button and the form data is valid.
    
> #### Useful Resources for this step
> - [Bootstrap alert component](https://getbootstrap.com/docs/4.5/components/alerts/)
> - [Document.querySelector() documentation](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)


> #### Test Your Code!
> Now is a good chance to test your code, open your `index.html` page and fill in wrong data on the form and check if the right error is shown.
> Verify also that when the form fields are correct then no error message is displayed.

## Results

We've now create your task form with the JavaScript validations to make sure the user submits correct data!

Your task should meet the assesment criteria in the **Final Project - Scorecard Rubric**.




<!-- Task-5 -->


# Task 5: Adding Tasks

## Description

For this task, we'll be creating a class to manage the tasks, adding a method to the class to keep track of tasks in our application, and connecting up the **New Task** form to create tasks.

## Walkthrough

### Step 1: The Setup

In this step, we'll re-organise our folder structure in preparation for the next few steps.

1. Create a `js` folder in your project if one does not already exist
2. Copy the existing js file into your `js` folder, and rename it to `index.js`
3. Update the `<script>` tag in your `html` file to use the new location of the `js/index.js` file.
4.  Create a `taskManager.js` file in the `js` folder
5. Add a `<script>` tag pointing to the `js/taskManager.js` file _before_ the `<script>` tag pointing to the `js/index.js` file.

### Step 2: The TaskManager Class

In this step, we'll create a `TaskManager` class that
will be responsible for managing the tasks in the application.

> #### Useful Resources for this step
> - [ECMAScript 2015 Classes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance#ECMAScript_2015_Classes)

1. Create a `TaskManager` class in `js/taskManager.js`
2. Within the `constructor` of the `TaskManager` class, initialize a `this.tasks` property on the class equal to an empty array.

> #### Test Your Code!
> Now is a good chance to test your code, head over to `js/index.js` and do the following
>
> 1. Initialize a new instance of `TaskManager`
> 2. `console.log()` the `tasks` property
>
> **Expected Result**
> You should see an empty array logged to the browser.

### Step 3: Adding A New Task Programmatically

In this step, we'll add a method to the `TaskManager` class that will allow us to add tasks to it's `tasks` property.

As part of this process, we're going to create a unique `id` for each task.

For each task for have a unique `id`, we will need to keep track of what `id` the latest task was created with, so that we can increment that `id` for the next task.

For example, pay attention to the two `task` objects below:
```js
const task1 = {
    id: 1,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
};

const task2 = {
    id: 2,
    name: 'Cook Dinner',
    description: 'Prepare a healthy serving of pancakes for the family tonight',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
};
```

Notice how each task has a unique `id`? We will be using this `id` in future steps to keep track of the different tasks. 

> #### Useful Resources for this step
> - [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

1. In the `TaskManager`'s `constructor`, accept a `currentId` parameter, with a default value of `0`.
2. Assign the `currentId` to a new property on the class, `this.currentId`.
3. Create a method on the class, `addTask`. This method should accept all the nessecary information from the form to create a task as parameters.
    - `name`
    - `description`
    - `assignedTo`
    - `dueDate`
    - `status`
4. Within the `addTask` method, increment the `this.currentId`
5. `push` a new task into the `this.tasks` array, with the correct properties of the task, using the values passed in as parameters as well as the new `this.currentId`
    **Note** Make sure to include the `id` and a default `status` of `'TODO'`

> #### Test Your Code!
> Now is a good chance to test your code, head over to `js/index.js` and do the following
>
> 1. Initialize a new instance of `TaskManager`
> 2. Use the `addTask` method to add a new task
> 2. `console.log()` the `tasks` property
>
> **Expected Result**
> You should see an array containing the added task logged to the browser.

### Step 4: Adding Tasks With The Form

In this final step, we will use the `TaskManager` class to keep track of tasks we add with the **New Task** form.

**Note**: For now, if your **New Task** form is on a seperate page to your **Task List**, copy it over to your **Task List** so it's all on the one page.

> #### Useful Resources for this step
> - [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> - [Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

1. Make sure a new `TaskManager` is initialized near the top of the file.
2. In `index.js`, add an event listener to the **New Task** form, listening to the `submit` event. If there is already an event listener used for validation, use that one.
3. When the `submit` event fires, if validation of the form is successful, use the values of each `input` in the form to call the `taskManager`'s `addTask` method.
    - **Note**: Make sure to prevent the default action of the form!
4. Clear the values from each form input, ready for the next submission.

## Results

We've now set up the `TaskManager` class, created an `addTask` and hooked it up to our **New Task** form!

Test out your code by adding some tasks using the **New Task** form, and checking the `TaskManager` instance's `tasks` array for the tasks.

Your task should meet the assesment criteria in the **Final Project - Scorecard Rubric**.




<!-- Task-6 -->



# Task 6: Display The Tasks

## Description

For this task, we'll be writing the code to display the `TaskManager`'s `tasks` array on the page.

## Walkthrough

### Step 1: Using Javascript to Create the Task HTML

> #### Useful Resources for this step
> - [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

In this step, we'll create a function using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to return the HTML for each individual task.

1. In `js/taskManager.js`, above the `TaskManager` class definition, create a new function, `createTaskHtml`. The function should accept the following parameters:
    - `name`
    - `description`
    - `assignedTo`
    - `dueDate`
    - `status`

    **Hint**: Try using an arrow function!

2. Within the `createTaskHtml` function, create a string using [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), copying the HTML of a single task from the `index.html`

    For example:
    ```js
    const html = `
        <li class="list-group-item">
            <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
                <h5>Take out trash</h5>
                <span class="badge badge-danger">TODO</span>
            </div>
            <div class="d-flex w-100 mb-3 justify-content-between">
                <small>Assigned To: Nick</small>
                <small>Due: 20/09/2020</small>
            </div>
            <p>Take out the trash to the front of the house</p>
        </li>
    `
    ```

3. Using the template literal placeholders (`${}`), replace each section of the task HTML with the correct parameter

4. Return the HTML from the function

> #### Test Your Code!
> Now is a good chance to test your code, head over to `js/index.js` and do the following
>
> 1. Create a `taskHtml` variable with the result of calling the `createTaskHtml` function, making sure to pass a value for each parameter.
> 2. `console.log()` the `taskHTML` variable
>
> **Expected Result**
> You should see HTML for the task in the console, for example:
>
> ```html
><li class="list-group-item">
>   <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
>       <h5>Take out trash</h5>
>       <span class="badge badge-danger">TODO</span>
>   </div>
>   <div class="d-flex w-100 mb-3 justify-content-between">
>       <small>Assigned To: Nick</small>
>       <small>Due: 20/09/2020</small>
>   </div>
>   <p>Take out the trash to the front of the house</p>
></li>
> ```

### Step 2: The render method

> #### Useful Resources for this step
> - [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
> - [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
> - [Array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
> - [Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
> - [Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

To display the tasks, we'll be creating a new method on our `TaskManager` class called `render`.

"Render" is a term used in computer science that means to "create a visual reference of". In this step, we are _rendering_ our tasks, so that they are visible on the page.

We can mostly rely on the data stored for each task in the `TaskManager`'s `tasks` property to display the task nicely on the page. The one change we will need to make is to format the `dueDate` of the task so that it is human-readable. To do this, we'll be using JavaScript's `Date` object.

1. In `js/taskManager.js`, within the `TaskManager` class, create a `render()` method. This method does not need any parameters.

2. Create a variable storing an empty array to hold the HTML of all the tasks' html, `tasksHtmlList`.

3. Loop over the `TaskManager`'s tasks, for each task:

    1. Store the current task in a variable

    2. Create a `date` variable, storing a `new Date()`, passing in the current task's `dueDate` to the `Date` constructor.

    3. Create a `formattedDate` variable, storing a readable `string` representing the date, using methods of the `date` we just created. 

        **Hint**: Use MDN's [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) reference to see what methods are available to format a date. Build a string using string concatenation or template literals. Check the [example/taskManager.js](example/js/taskManager.js) to see how it can be done if you get stuck.
    
    4. Create a `taskHtml` variable to store the HTML of the current task, by calling the `createTaskHtml` function and using the properties of the current task, as well as the new `formattedDate` variable for the parameters.

    5. `push` the `taskHtml` into the `tasksHtmlList` array.

4. After looping through each task, create a `tasksHtml` variable, set the variable to a string of HTML of all the tasks by `join`ing the `tasksHtmlList` array together, separating each task's html with a newline.

    **Hint**: `\n` can be used to represent a newline.

5. Make sure the tasks list in `index.html` has an `id` so it can be selected.

6. Select the tasks list element and set its `innerHTML` to the `tasksHtml`.

### Step 3: Calling render

> #### Useful Resources for this step
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

Now that the `TaskManager` class has a `render()` method, we need to make sure to call it each time a new task is added, so that it is _rendered_ to the page!

1. In `js/index.js`, in the event listener for the `submit` event on the **New Task** form, find the call to the `TaskManager`'s `addTask`.

2. After `addTask` is called, call the `TaskManager`'s `render` method.

## Results

Go ahead and open `index.html` in the browser and add some tasks using the form. You should see each new task populate the task list!

Your task should meet the assesment criteria in the **Final Project - Scorecard Rubric**.





<!-- Task-7 -->



# Task 7: Update A Task

## Description

For this task, we'll write the code to update a task's status to "DONE" once a "Mark As Done" button on the task is clicked.

Note, for this task, we are _not_ using the "Update Task" form. This is part of the re-structuring of the project. This step will be added as a **stretch goal** to the end of the course.

## Walkthrough

### Step 1: Adding the "Mark As Done" button

> #### Useful Resources for this step
> - [Bootstrap - Buttons](https://getbootstrap.com/docs/4.5/components/buttons/)

In this step, we'll add a "Mark As Done" button to the tasks, so that a user can click the button to mark that specific task as done.

1. In `js/taskManager.js`, within the `createTaskHtml` function, add a button to the task html to mark the task as done.
2. Add a 'done-button' class to the "Mark As Done" button. We'll use this later to check if the button has been clicked.

> #### Test Your Code!
> Now is a good chance to test your code, open `index.html` in the browser and create a new task using the form.
>
> **Expected Result**
> You should see your tasks now have a "Mark As Done" button.

### Step 2: Adding an Event Listener to the Task List

> #### Useful Resources for this step
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> - [Document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
> - [Event.eventTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)
> - [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
> - [DOM Traversal](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model)
> - [Node.parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)

In this step, we'll add an Event Listener to our **Task List**, so that we can check if one of our Task's buttons is clicked.

Note that we're not adding an Event Listener to the "Mark As Done" buttons, this is because instead of adding Event Listener's to each "Mark As Done" button, we can add a singular Event Listener to the **Task List** and use [DOM Traversal](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model) to find the Task that was clicked. **DOM Traversal** is the act of using code to _traverse_ up and down the **DOM Tree** to find a specific **DOM Element**.

This way, we can avoid having to add Event Listeners to each and every "Mark As Done" button on the page.

1. Make sure the **Task List** in `index.html` has an id you can use to select it, I went with `tasksList`.

2. In `js/index.js`, at the bottom of the file, use `querySelector` to select the **Task List** and store it in a variable.

3. Add an Event Listener to the **Task List**, listening for the 'click' event.

4. In the Event Handler, we'll need to take the `event` parameter. 

    For example:
    ```js
    tasksList.addEventListener('click', (event) => { // "event" here is the event parameter

    });
    ```

5. Using the `event.target`, using an `if` statement, check if the `target`'s `classList` contains the class we added to the button, `'done-button'`. If the `classList` contains `'done-button'`, we know we clicked on the "Mark As Done" button from earlier!

6. Use [DOM Traversal](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model), such as the `parentElement` property of the `target` ([Node.parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)) to _traverse_ the DOM and find the task's element. (Eg, it's `<li>`). Store the `<li>` in a `parentTask` variable.



> #### Test Your Code!
> Now is a good chance to test your code, open `js/index.js` and do the following:
> 1. Directly after the code that traverses the DOM to find the `parentTask`, `console.log()` the `parentTask`.
> 2. Open `index.html` in the browser.
> 3. Create a new task with the form.
> 4. Click the "Mark As Done" button on the newly created task.
>
> **Expected Result**
> In the browser console, you should see the Task's element logged.

### Step 3: Adding the Task id to the DOM

> #### Useful Resources for this step
> - [Using Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
> - [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

In order to find the correct Task we want to update, we need a way to find which `TaskManager`'s `Task`'s "Mark As Done" button we clicked on the page. To do this, we'll be using our unique `id` we set for each task in the previous project steps.

Before we do however, we'll need to make sure we add this `id` to the HTML of each `task`, so that we can later retrieve the `id` and use it to look up which `task` we clicked.

1. In `js/taskManager.js`, find the `createTaskHtml` function created in the project's **Task 7**.

2. Add a new parameter to the function, `id`.

3. Within the HTML of the task, use a placeholder (`${}`) in the template literal to add the `id` as the value of a `data-task-id` attribute of the surrounding `task` element - Either the `<li>` or the `<div>`, depending on which one your group used.

    **Note** Check the [Using Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) resource to see how this is done!

4. In `js/taskManager.js`, find the `render()` method of the `TaskManager` class.

5. Find where `createTaskHtml` is used, and pass in the `task.id` as the new `id` parameter.

> #### Test Your Code!
> Now is a good chance to test your code, open `js/index.js` and do the following:
> 1. In the previous test your code, we logged out the Task DOM element, re-implement the same test code.
>
> **Expected Result**
> In the browser console, you should see the Task's element logged, the Task element should now have a `data-task-id` attribute set to the `id` of the task.

### Step 4: Adding getTaskById to the TaskManager class

> #### Useful Resources for this step
> - [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

Now that we have our task `id` in our HTML, we need a way to use the `id` to find the correct task. In this step, we'll implement a `getTaskById` method on our `TaskManager` class to do just that. The `getTaskById` will compare a passed in `taskId` parameter to the ids of the `TaskManager` `tasks`. If it finds a matching task, it will return it from the method.

1. In `js/taskManager.js`, find the `TaskManager` class.

2. Add a new method, `getTaskById()`, it should accept a `taskId` as a parameter.

3. In the `getTaskById()` method, create a `foundTask` variable to store the found task.

    **Note** Since we'll be _mutating_ (modifying) this variable, be sure to declare it with `let`!

4. Loop over the `this.tasks` array, for each task in the loop:

    1. Store the current task in a variable called `task`

    2. Compare `task.id` to the passed in `taskId`, if its a match, store the `task` to the variable `foundTask`

5. After the loop, return the `foundTask` variable from the method.

> #### Test Your Code!
> Now is a good chance to test your code, open `index.html` in the browser and do the following:
> 1. Add a task using the new task form
> 2. Open the JavaScript console
> 3. Call `getTaskById()` using the `TaskManager` instance created in `js/index.js`, using `0` as the `taskId` eg: `taskManager.getTaskById(0)`.
>
> **Expected Result**
> In the browser console, you should see an object representing the task with an `id` of `0`.

### Step 5: Update the status of the selected Task to 'DONE'

> #### Useful Resources for this step
> - [Using Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
> - [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

Now that we have the code in place that adds each `task.id` to the DOM, as well as a method `getTaskById` to retrieve the right ask from our `TaskManager`, we can combine the two to update the `task.status` to `'DONE'` once the "Mark As Done" button is clicked.

1. In `js/index.js`, find the Event Listener for the **Task List** `click` event we created in **Step 2**.

2. After finding the `parentTask`, create a `taskId` variable, setting the value to the `taskId` `data-attribute` of the DOM element.

    **Note**: The `data-attribute` will be a `String`, but our `id`s are stored as `Number`s, make sure to convert the `String` to a `Number` before setting it to the `taskId` variable. Check [example/js/index.js](example/js/index.js) if you get stuck!

3. Using the `taskId` as it's parameter, call the `getTaskById()` method on the `taskManager`, storing the result in a `task` variable.

4. Change the `status` of the `task` to `'DONE'`.

5. Render the updated task by calling the `render()` method on the `taskManager`. 

> #### Test Your Code!
> Now is a good chance to test your code, open `index.html` in the browser and do the following:
> 1. Add a task using the new task form
> 2. Click the "Mark As Done" button on the newly created task
>
> **Expected Result**
> You should see the `status` of the task update to `'DONE'` in the browser!

### (OPTIONAL 1) Step 6: Stretch Goal - Hiding the "Mark As Done" Button For Completed Tasks

> #### Useful Resources for this step
> - [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Conditional_ternary_operator)

Stretch Goals are optional steps to attempt once your group has completed **all** previous steps. Stretch Goals require out-of-the-box thinking and do not include a step-by-step walkthrough. It's a challenge, good luck!

For this Stretch Goal, we want to hide the "Mark As Done" button for Task's that are already done.

In `js/taskManager.js`, in the HTML for each Task, add an `invisible` class to the "Mark As Done" button if the `status` parameter is `'TODO'`, and the `visible` class if it isn't.

Check out [example/js/taskManager.js](example/js/taskManager.js) for a completed example!

### (OPTIONAL 2) Step 7: Stretch Goal - Change the Styling of the Task Status.

> #### Useful Resources for this step
> - [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Conditional_ternary_operator)

Stretch Goals are optional steps to attempt once your group has completed **all** previous steps. Stretch Goals require out-of-the-box thinking and do not include a step-by-step walkthrough. It's a challenge, good luck!

For this Stretch Goal, we want to add specific styles to our Task Status depending on whether the Status is `'DONE'` or `'TODO'`.

In `js/taskManager.js`, in the HTML for each Task, change the style (eg: color) of the Task Status, depending on whether the passed in `status` is equal to `'TODO'` or not.

Check out [example/js/taskManager.js](example/js/taskManager.js) for a completed example!

## Results

Open up `index.html` and add a task. Now we should we able to click the "Mark As Done" button below each task, to change the status from "TODO" to "DONE".

Your task should meet the assesment criteria in the **Final Project - Scorecard Rubric**.





<!-- Task-8 -->


# Task 8: Persisting Tasks to LocalStorage

## Description

In this task, we'll _persist_ (ie: save) our tasks to LocalStorage, so that we can load them again the next time we visit our page.

## Walkthrough

### Step 1: Adding the save method to TaskManager

> #### Useful Resources for this step
> - [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
> - [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
> - [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
> - [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

In this step, we'll add a `save()` method to our TaskManager, that we can call to save the current `this.tasks` to localStorage. We also need to save the `currentId` of the task we're working on, so that any new tasks after the application has loaded can continue off the `currentId`.

Because `localStorage` can only store strings, we need a way to convert our `this.tasks` array to a string, that can also be converted _back_ to an array when we load the tasks. For this, we'll be using [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify), which we can [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) later on to convert back to an array.

Also, since our `currentId` is a number, we'll need to convert that to a string too.

1. In `js/taskManager.js`, in the `TaskManager` class, create a `save` method. This method doesn't require any parameters.
2. In the `save` method, create a JSON string of the tasks using `JSON.stringify()` and store it to a new variable, `tasksJson`.
3. Store the JSON string in `localStorage` under the key `tasks` using `localStorage.setItem()`.
4. Convert the `this.currentId` to a string and store it in a new variable, `currentId`.
5. Store the `currentId` variable in `localStorage` under the key `currentId` using `localStorage.setItem()`.
4. In `js/index.js`, after both adding a new task and updating a task's status to done, call `taskManager.save()` to save the tasks to `localSorage`.

> #### Test Your Code!
> Now is a good chance to test your code, follow the steps below:
> 1. Open `index.html` in the browser and create a new task using the form.
> 2. Open the developer tools and navigate to the `Application` tab.
> 3. In the sidebar, under `Storage`, expand `Local Storage` and select `file://`
>
> **Expected Result**
> You should see a key `tasks` with the stringified array of tasks as it's value, as well as a key `currentId` with the currentId as it's value.
> ![Image of Expected Result](images/1.png)

### Step 2: Adding the load method to TaskManager

> #### Useful Resources for this step
> - [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
> - [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

Now that we have saved our tasks to `localStorage`, we need a way to load them back into our `TaskManager` when we load the application. As well as loading our `currentId` back into our `TaskManager`.

For this, we'll be converting the array we _stringified_ with `JSON.stringify()` back to an array, using `JSON.parse()`, before storing them back into the `TaskManager`'s `this.tasks`.

We'll also be converting the `currentId` number we converted as a string, back to a number.

1. In `js/taskManager.js`, add a new method called `load`. This method doesn't require any parameters.
2. In the `load` method, check if any tasks are saved in localStorage with `localStorage.getItem()`.
3. If any tasks are stored, get the JSON string of tasks stored in `localStorage` with `localStorage.getItem()`, making sure to pass the key we used to save the tasks, `tasks`. Store this string into a new variable, `tasksJson`.
4. Convert the `tasksJson` string to an array using `JSON.parse()` and store it in `this.tasks`.
5. Next, check if the `currentId` is saved in localStorage with `localStorage.getItem()`.
6. If the `currentId` is stored, get the `currentId` in localStorage using `localStorage.getItem()` and store it in a new variable, `currentId`.
7. Convert the currentId to a number before storing it to the `TaskManager`'s `this.currentId`
8. In `js/index.js`, near the top of the file, after _instantiating_ `taskManager`, `load` the tasks with `taskManager.load()` and render them with `taskManager.render()`.

## Results

Open up `index.html` and add a task. Now, when you re-visit the page (eg: close and open or refresh), you should see the previously created task loaded and rendered to the page! 

Also, since we saved the `currentId`, any _new_ task we create should use the next `currentId`, after the one stored in `localStorage`.

Your task should meet the assesment criteria in the **Final Project - Scorecard Rubric**.





<!-- Task-9 -->



# Task 9: Deleting Tasks

## Description

Now that we are persisting tasks to `localStorage`, we need a way to delete old tasks so that they don't fill up the list over time.

## Walkthrough

### Step 1: Add A Delete Button to the Task HTML

> #### Useful Resources for this step
> - [Bootstrap Buttons](https://getbootstrap.com/docs/4.5/components/buttons/)

In this step, we'll need to make sure we have a button on each of our tasks to delete the task.

1. In `js/taskManager.js`, find the function `createTaskHtml`.
2. In the returned HTML, add a `button` to delete the task, giving it a class `delete-button` that we will use later to check if the button was clicked.

> #### Test Your Code!
> Now is a good chance to test your code, follow the steps below:
> 1. Open `index.html` in the browser and create a new task using the form.
>
> **Expected Result**
> You should see tasks you have created now have a "Delete" button.

### Step 2: Create the deleteTask Method on TaskManager

> #### Useful Resources for this step
> - [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

Now we'll need a way to delete the task. For this, we'll create a `deleteTask` method on our `TaskManager` class.

In this method, we'll be removing the task from the `this.tasks` array. Interestingly, there is no simple way to remove an element from an array. Instead, we can tackle this problem in one of two ways:

- Use the `slice()` method to remove a section of the array
- Create a new array **without** the elements we want removed included.

For this step, we'll go with the second way. It's more _explicit_ and clear.

1. In `js/taskManager.js`, create a `deleteTask` method on the `TaskManager` class. It should take one parameter, `taskId`, the id of the task we want deleted.
2. In the `deleteTask` method, create an empty array and store it in a new variable, `newTasks`.
3. Loop over the tasks, in the loop
    - Get the current task in the loop, store it in a variable, `task`.
    - Check if `task.id` is **not** equal to the `taskId` passed as a parameter.
    - If the `task.id` is **not** equal to the `taskId`, push the `task` into the `newTasks` array.
4. Set `this.tasks` to `newTasks`.

### Step 3: Setting an EventListener to the Delete Button on Tasks

> #### Useful Resources for this step
> - [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
> - [Using Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

Now we have our `deleteTask` method ready, we need to connect it to the delete buttons we created in Step 1.

We'll be using the `delete-button` class we added to the buttons to find them. It's all very similar to the code we did for the "Mark As Done" button. After the deleting the task, remember to `taskManager.save()` and `taskManager.render()` the tasks!

1. In `js/index.js`, find the `EventListener` for the `click` event on the `Tasks List` we created in Task 8.
2. At the bottom of the function, after our code that handles the "Mark As Done" button, create a new `if` statement to check if the `event.target.classList` `contains` the class `'delete-button'`.
3. If it does, get the `parentTask` and store it as a variable.
4. Get the `taskId` of the parent task from its `data-task-id` property - **remember**, since it's stored as a string in a `data` attribute, we need to convert it to a number, just like we did for task 8!
5. Delete the task, passing the `taskId` to `taskManager.deleteTask()`
6. Save the tasks to `localStorage` using `taskManager.save()`
7. Render the tasks using `taskManager.render()`.
    
## Results

Open up `index.html` and add a task. Find the task in the Task List and click the delete button. The task should now be deleted!

Refresh the page to make sure the new list with the task deleted is saved. When you refresh the page, you should _not_ see the deleted task in the list.

Your task should meet the assesment criteria in the **Final Project - Scorecard Rubric**.



<!-- Task-10 -->



# Task 10: Test TaskManager

## Description

In our final task, we'll test our `TaskManager` class using Mocha.

## Walkthrough

### Step 1: Add Mocha to the project

> #### Useful Resources for this step
> - [Mocha - Getting Started](https://mochajs.org/#getting-started)

In this step, we'll add Mocha to our project.

1. Install Mocha as development dependency for your project:
    ```Javascript
      npm install --save-dev mocha
    ```
2. Create a new test directory and a test.js file to add your tests:
  - `mkdir test`
  - `$EDITOR test/test.js # or open with your favorite editor`


### Step 2: Testing TaskManager Methods

> #### Useful Resources for this step
> - [Mocha - Getting Started](https://mochajs.org/#getting-started)

In this step, we'll test some of the methods that exist on our `TaskManager` class.

1. Use what you have learnt on testing to unit test the following methods on the `TaskManager` class:
  - `addTask`
  - `deleteTask`
  - `getTaskById`
5. Add a test case that tests how the `TaskManager` is initialized, ie: the `constructor` being called when a `new TaskManager()` is initialized.

> #### Test Your Code!
> Now is a good chance to test your code:

> 1. Run your tests with `npm test`.

>  **Expected Result**
>  You should see the tests all pass, green! 

### JWD 3 - YOU DO NOT NEED DO THIS STEP - IT IS OPTIONAL 

### Step 3: Testing TaskManager Methods - CHALLENGE (OPTIONAL)

> #### Useful Resources for this step
> - [Running Mocha in the Browser](https://mochajs.org/#running-mocha-in-the-browser)

In this step, we'll test the remaining methods on our `TaskManager` class. These are much more tricky than the previous methods, so make good use of the provided [Mocha Github example](https://github.com/mochajs/mocha-examples) if you get stuck.

Make sure to adjust any examples you reference to fit your code.

1. Use what you have learnt on testing to unit test the following methods on the `TaskManager` class:
  - `render`
  - `save`
  - `load`

## Results

Run your test and make sure they all passed!

Your task should meet the assesment criteria in the **Final Project - Scorecard Rubric**.

## Example

Stuck? Check out the provided example in the [Mocha Github example](https://github.com/mochajs/mocha-examples)
