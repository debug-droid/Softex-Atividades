let livro = {
    titulo: "Oliver Twist",
    autor: "Charles Dickens",
    paginas: 352
}

let imprimeObj = obj => {

    for (let x in obj) {
       console.log(obj[x]);
    }
} 

console.log(imprimeObj(livro));

let frutas = ["maçã", "uva", "melancia", "banana"];

let imprimeArray = array => {

    for(let y of array){
        console.log(y);
    }
}

console.log(imprimeArray(frutas));