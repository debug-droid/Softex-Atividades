const express = require('express');

const app = express();

let alunos = [{id: 1, nome: "Maria"},{id: 2, nome: "João"}];

app.use(express.urlencoded({extended: true}));

app.get('/alunos', (req, res) => {
    res.status(200).send(`${JSON.stringify(alunos)}`);
});

app.post('/alunos', (req, res) => {
    const novoAluno = req.body;

    alunos.push(novoAluno);

    res.status(201).send(`${novoAluno} adicionado.`);
});

app.put('/alunos/:nome', (req, res) => {
    const nome = req.params.nome;

    if(nome == undefined || nome == null || nome == '') {
        res.status(404).send('Nome não encontrado.');
    } else {
        return res.status(200).send('Nome atualizado com sucesso!');
    }
    
});

app.delete('/alunos/:id', (req, res) => {
    const id = req.params.id

    alunos = alunos.filter((aluno) => aluno.id == id);

    return res.status(204).send('Aluno deletado.');
});


app.listen(3000, () => {
    console.log('Server rodando na porta 3000.');
});