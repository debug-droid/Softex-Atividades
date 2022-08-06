function passou(nota1, nota2, nota3) {

    let media = (nota1 += nota2 += nota3) / 3;

    let resultado = media >= 7 ? "Aprovado." : "Reprovado.";

    console.log(resultado);
}