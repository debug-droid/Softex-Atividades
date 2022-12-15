const express = require('express');
const livro = require('./livro');
const statusCodes = require('http-status-codes');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/livro', (req, res) => {
    res.send(`${JSON.stringify(livro)}`);
});

app.post('/AddLivro', (req, res) => {
    const novoLivro = req.body;

    livro.push(novoLivro);

    res.status(statusCodes.CREATED).send(`${novoLivro}, adicionado.`);
});

app.put('/livro/:nome', (req, res) => {
    const nome = req.params.nome;
    const updatedLivro = req.body;

    livro = livro.map(book => {
        if(nome == livro[0].nome) {
            return updatedLivro;
        }
        return book;
    });
    
    return res.send(`${updatedLivro} atualizado.`);
});

app.delete('/livro/:nome', (req, res) => {
    const nome = req.params.nome;

    livro = livro.filter((book) => book.nome !== nome);

    return res.status(statusCodes.NO_CONTENT).send(`Livro ${nome}, deletado.`);
});