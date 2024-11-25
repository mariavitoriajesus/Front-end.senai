// var nome = 'leo'
// var cpf = 888888
// var email = 'email@seu'
// var telefone = 7512548
// var tipoConta = 'fisica'
// var saldo = 9

class Cliente {
    nome;
    dataNascimento;
    cpf;
    email;
    telefone;
    tipoConta;
    saldo;
    depositar(valor) {
       if (valor > 0) {
        console.log(`Operação não permitida`)
       }else {
        this.saldo += valor
        console.log(`O valor de ${valor} foi depositado com sucesso!`)
       }
    }
    // argumentos são os valores passandos 
    // parametros são as palavras que vão salvar o argumento
    pix(valor){
       if (this.saldo <= valor) {
        console.log(`Saldo insulficiente`)
       } else {
        this.saldo -= valorn
        console.log(`Pix  de valor, ${valor} foi efetuado com sucesso!`)
       }
    }
}

// class Saldo {
//     depositar;
//     saque;
//     transferencia;
//     pix;
// }

var cliente1 = new Cliente
cliente1.nome = 'leo'
cliente1.dataNascimento = '11/08/1984'
cliente1.cpf = 7512548
cliente1.email = 'leo@email.com'
cliente1.saldo = 0
cliente1.pix(100)
console.log(cliente1)