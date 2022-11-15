const express = require('express');
const users = require('./users');
const statusCodes = require('http-status-codes');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
    res.send("<h1>Esta é a página principal!</h1>");
});

app.post("/users", (req, res) => {
    const newUser = req.body;
    
    users.push(newUser);

    res.status(statusCodes.CREATED).send(`${newUser}, adicionado.`);
});

app.put("/users/:userId", (req, res) => {
    const userId = req.params.userId;
    const updatedUser = req.body;

    users = users.map(user => {
        if(Number(userId) === user.id) {
            return updatedUser;
        }
        return user;
    });

    return res.send(`${updatedUser}, atualizado.`);
});

app.delete("/users/:userId", (req, res) => {
    const userId = req.params.userId;

    users = users.filter((user) => 
    user.id !== Number(userId));

    return res.status(statusCodes.NO_CONTENT).send(`Usuário ${userId}, deletado.`);
});