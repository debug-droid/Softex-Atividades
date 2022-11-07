//usando a biblioteca http do node
const { criarServer } = require('http');

//constante para configuração da porta
const PORTA = process.env.PORT || 3000;

//variável principal do servidor
const servidor = criarServer();

//quando houver uma requisição ao servidor, será respondido com 'Olá Mundo!'
servidor.on('request', (request, response) => {
    response.end('Olá Mundo!');
})

//mensagem do servidor quando estiver rodando
servidor.listen(PORT, () => {
    console.log(`Servidor na porta ${PORTA}`);
})