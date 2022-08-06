function calculadora() {

    let value1 = prompt("Digite o primeiro valor:");
    let value2 = prompt("Digite o segundo valor:");
    let operacao = prompt("Qual operação deseja realizar, +, -, * ou / ?");
    let resto = value1 % value2;

    if (operacao == "+") {
        console.log(value1 + value2);
    } else if (operacao == "-") {
        console.log(value1 - value2);
    } else if (operacao == "*") {
        console.log(value1 * value2);
    } else if (operacao == "/") {
        console.log(`${value1 / value2} e sobra: ${resto}`);
    }

}

calculadora();