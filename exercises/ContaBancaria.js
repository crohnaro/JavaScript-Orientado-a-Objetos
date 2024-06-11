//Crie uma classe ContaBancaria com propriedades numeroDaConta, saldo e métodos depositar() e sacar(). Adicione validações para garantir que não seja possível sacar mais do que o saldo disponível.
class ContaBancaria {
  constructor(numeroDaConta, saldo = 0) {
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
      return false;
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
      return true;
    }
  }

  verificarSaldo() {
    console.log(`Saldo atual: R$ ${this.saldo}`);
    return this.saldo;
  }
}
module.exports = ContaBancaria;
