// importando o express
const express = require("express");

// instanciando o express na constante app
const app = express();

// rota get raiz
app.get('/', (req, res) => {
    res.send("Olá express!");
});

// rota post
app.post('/post', (req, res) => {
    res.send("Resposta do post.");
});

// servidor ligado na porta 8080
app.listen(8080, () => {
    console.log("Servidor escutando na porta 8080.");
});

//para rodar o projeto é só digitar no terminal o comando
// 'node main.js'
// e abrir o browser e digitar 'localhost:8080' para o GET
// 'localhost:8080/post' para a rota post