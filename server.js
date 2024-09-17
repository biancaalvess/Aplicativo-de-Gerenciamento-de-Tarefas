const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

let tasks = [];

// Rota para obter as tarefas
app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

// Rota para adicionar tarefa
app.post('/add-task', (req, res) => {
    const { task } = req.body;
    tasks.push(task);
    res.json({ tasks });
});

// Rota para deletar tarefa
app.delete('/delete-task/:index', (req, res) => {
    const index = req.params.index;
    tasks.splice(index, 1);
    res.json({ tasks });
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
