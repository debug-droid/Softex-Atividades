var http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    if (req.url == "/"){
    res.write("<h1>Página principal</h1>");
    res.end();
    } else if (req.url == "/cadastro"){
    res.writeHead(201, {"Content-Type": "text/html;charset=utf-8"});
    res.write("<h1>Cadastro realizado com sucesso :)</h1>");
    res.end();
    } else {
    res.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
    res.write("<h1>Página não encontrada :(</h1>");
    res.end();
}

res.end();

});

server.listen(3000, () => {
    console.log('Servidor rodando!');
});