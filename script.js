document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
            newTaskInput.focus();
        }
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            deleteTask(event.target.parentElement);
        } else if (event.target.tagName === 'LI') {
            toggleComplete(event.target);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }

    function toggleComplete(taskItem) {
        taskItem.classList.toggle('completed');
    }
});
