const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let users = [
  {id: 1, name: 'Rafael Ribeiro', age: 31},
  {id: 2, name: 'Gabriel Custódio', age: 27}
];

let consoleBody = (req, res, next) => {
  console.log(req.body);
  next();
}

app.use(bodyParser.urlencoded({ extended: false }));

// para o middleware funcionar em qualquer tipo de método
app.use('/', consoleBody);

app.get('/', (req, res) => {
  return res.send('<h1>Página inicial.</h1>');
});

// imprime os users em forma de json
app.get('/users', (req, res) => {
  res.json(JSON.stringify(users));
});

// para utilizar query é só colocar na url o seguinte:
// http://localhost:3000/users?id=0
app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.query);
 let user = users[req.params.id]; 
 
  res.json(user);
});

// exemplo de placeholder
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});