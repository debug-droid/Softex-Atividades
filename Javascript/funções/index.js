//1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;

function hello() {

    console.log("Hello World");
}

hello();

//2. uma função tradicional com parâmetros e um retorno de valor;

function mediaTotal(nota1, nota2) {

    nota1 = 8;
    nota2 = 10;
    media = (nota1 + nota2) / 2;

    return media;
}

console.log(mediaTotal());

//3. uma arrow function com parâmetros e que retorne um valor.

const soma = (num1, num2) => {

    return num1 + num2;

}

console.log(soma(5,10));