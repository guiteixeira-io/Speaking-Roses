const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', createTask);

async function createTask(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('due-date').value;

    const task = {
        title,
        description,
        priority,
        dueDate
    };

    try {
        const response = await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        });
        const taskId = await response.json();
        renderTask(taskId, task);
    } catch (error) {
        console.error(error);
    }
}

async function getTasks() {
    try {
        const response = await fetch('/api/tasks');
        const tasks = await response.json();
        tasks.forEach(task => renderTask(task.TaskId, task));
    } catch (error) {
        console.error(error);
    }
}

function renderTask(taskId, task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.innerHTML = `
        <h2>${task.title}</h2>
        <p>${task.description}</p>
        <p>Priority: ${task.priority}</p>
        <p>Due Date: ${task.dueDate}</p>
    `;
    taskList.appendChild(taskElement);
}

getTasks();