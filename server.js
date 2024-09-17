// Obter os elementos do DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskTableBody = document.querySelector('#taskTable tbody');
const confirmationMsg = document.getElementById('confirmationMsg');

let taskCount = 0;

// Adicionar tarefa
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Incrementar o contador de tarefas
        taskCount++;

        // Criar uma nova linha na tabela
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${taskCount}</td>
            <td>${taskText}</td>
            <td><button onclick="deleteTask(this)">Excluir</button></td>
        `;
        taskTableBody.appendChild(newRow);

        // Exibir mensagem de confirmação
        confirmationMsg.textContent = "Tarefa adicionada com sucesso!";
        confirmationMsg.classList.remove('hidden');
        setTimeout(() => {
            confirmationMsg.classList.add('hidden');
        }, 2000); // Ocultar após 2 segundos

        // Limpar o campo de entrada
        taskInput.value = '';
    } else {
        // Se o campo estiver vazio, exibir uma mensagem de erro
        confirmationMsg.textContent = "Por favor, insira uma tarefa!";
        confirmationMsg.classList.remove('hidden');
        setTimeout(() => {
            confirmationMsg.classList.add('hidden');
        }, 2000); // Ocultar após 2 segundos
    }
});

// Função para excluir uma tarefa
function deleteTask(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
