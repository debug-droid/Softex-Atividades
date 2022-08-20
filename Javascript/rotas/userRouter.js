const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.send(`<h2>Esta é a Home.</h2>`);
});

router.post('/user', (req, res) => {
    res.send("Usuário incluído.");
});

router.put('/user/:id', (req,res) => {
    res.send(`Usuário ${req.params.id} atualizado.`)
});

router.delete('/user/:id', (req,res) => {
    res.send(`Usuário ${req.params.id} deletado.`)
});

module.exports = router;