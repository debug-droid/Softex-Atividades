function notas(nota1, nota2) {

    let media = (nota1 + nota2) / 2;

    let pontuacaoFaltante = 7 - media;

    if(media < 7) {
        console.log(`Você tem que tirar nota ${pontuacaoFaltante} na próxima prova.`);
    } else {
        console.log(`sua nota foi ${media}, você está aprovado.`);
    }
}