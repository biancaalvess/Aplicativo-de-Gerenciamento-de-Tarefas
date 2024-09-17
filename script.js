document.getElementById('add-task-btn').addEventListener('click', function() {
    const task = document.getElementById('new-task').value;
    
    if (task) {
        fetch('/add-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: task })
        })
        .then(response => response.json())
        .then(data => {
            updateTaskList(data.tasks);
            document.getElementById('new-task').value = '';
        });
    }
});

function updateTaskList(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', () => deleteTask(index));
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    fetch(`/delete-task/${index}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        updateTaskList(data.tasks);
    });
}

window.onload = () => {
    fetch('/tasks')
    .then(response => response.json())
    .then(data => {
        updateTaskList(data.tasks);
    });
};
