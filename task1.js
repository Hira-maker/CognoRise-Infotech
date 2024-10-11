// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage on page load
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task event listener
addTaskBtn.addEventListener('click', addTask);

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create new task item
    const li = document.createElement('li');
    const taskTextEl = document.createElement('input');
    taskTextEl.type = 'text';
    taskTextEl.value = taskText;
    taskTextEl.setAttribute('readonly', 'readonly');

    // Create edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // Append to list item
    li.appendChild(taskTextEl);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Append to task list
    taskList.appendChild(li);

    // Save task in local storage
    saveTaskToLocalStorage(taskText);

    // Clear input field
    taskInput.value = '';

    // Edit task event
    editBtn.addEventListener('click', () => {
        if (editBtn.textContent === 'Edit') {
            taskTextEl.removeAttribute('readonly');
            taskTextEl.focus();
            editBtn.textContent = 'Save';
        } else {
            taskTextEl.setAttribute('readonly', 'readonly');
            updateTaskInLocalStorage(taskText, taskTextEl.value);
            editBtn.textContent = 'Edit';
        }
    });

    // Delete task event
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        deleteTaskFromLocalStorage(taskTextEl.value);
    });
}

// Save task to local storage
function saveTaskToLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Get tasks from local storage
function getTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

// Load tasks from local storage
function loadTasks() {
    let tasks = getTasksFromLocalStorage();
    tasks.forEach(task => {
        const li = document.createElement('li');
        const taskTextEl = document.createElement('input');
        taskTextEl.type = 'text';
        taskTextEl.value = task;
        taskTextEl.setAttribute('readonly', 'readonly');

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        li.appendChild(taskTextEl);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        // Edit task event
        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === 'Edit') {
                taskTextEl.removeAttribute('readonly');
                taskTextEl.focus();
                editBtn.textContent = 'Save';
            } else {
                taskTextEl.setAttribute('readonly', 'readonly');
                updateTaskInLocalStorage(task, taskTextEl.value);
                editBtn.textContent = 'Edit';
            }
        });

        // Delete task event
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
            deleteTaskFromLocalStorage(taskTextEl.value);
        });
    });
}

// Update task in local storage
function updateTaskInLocalStorage(oldTask, newTask) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.map(task => (task === oldTask ? newTask : task));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Delete task from local storage
function deleteTaskFromLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
