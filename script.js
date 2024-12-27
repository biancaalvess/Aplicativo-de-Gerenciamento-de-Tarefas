const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskTableBody = document.querySelector('#taskTable tbody');
const confirmationMsg = document.querySelector('.confirmation-msg');

let taskCount = 0;

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        taskCount++;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${taskCount}</td>
            <td>${taskText}</td>
            <td><button class="delete-btn" onclick="deleteTask(this)">Excluir</button></td>
        `;
        taskTableBody.appendChild(newRow);

        confirmationMsg.textContent = "Tarefa adicionada com sucesso!";
        confirmationMsg.classList.remove('hidden');
        setTimeout(() => {
            confirmationMsg.classList.add('hidden');
        }, 2000); 

        taskInput.value = '';
    }
});

function deleteTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
