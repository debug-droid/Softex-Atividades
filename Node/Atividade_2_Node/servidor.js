//usando a biblioteca http do node
const http = require('http');

//constante para configuração da porta
const PORTA = process.env.PORT || 3000;

//cria o servidor http e escuta uma requisição para a porta 3000
http.createServer((req, res) => {
    res.writeHead(200, {'Content-type':'text/plain'});
    res.end('Olá Mundo!');
}).listen(3000, '127.0.0.1');

//mensagem do servidor quando estiver rodando
console.log('Servidor rodando em http://127.0.0.1/' + `${PORTA}`);