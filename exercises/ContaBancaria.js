//Crie uma classe ContaBancaria com propriedades numeroDaConta, saldo e métodos depositar() e sacar(). Adicione validações para garantir que não seja possível sacar mais do que o saldo disponível.
class ContaBancaria {
  constructor(numeroDaConta, saldo = 0) {
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log("Depósito de", valor ,"feito com sucesso.");
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log("Saque de", valor ,"feito com sucesso.");
      return true;
    } else {
      console.log("Saldo insuficiente.");
      return false;
    }
  }

  verificarSaldo() {
    return this.saldo;
  }
}

module.exports = ContaBancaria;
