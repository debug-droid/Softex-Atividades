let Banco = {

    saldo: 150,
    tipoDeConta: 'corrente',
    agencia: 0011,
    numeroDaConta: 1122,

    buscarSaldo: function() {
        return this.saldo;
    },
    
    deposito: function(valor) {
        return this.saldo + valor;
    },

    saque : function(valor) {

        return this.saldo - valor;
    }
}

console.log(Banco.buscarSaldo());

console.log(Banco.deposito(100));

console.log(Banco.saque(100));

console.log(Banco.numeroDaConta);