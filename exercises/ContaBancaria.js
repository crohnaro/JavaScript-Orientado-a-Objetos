//Crie uma classe ContaBancaria com propriedades numeroDaConta, saldo e métodos depositar() e sacar(). Adicione validações para garantir que não seja possível sacar mais do que o saldo disponível.
class ContaBancaria {
  constructor(numero, saldoInicial = 0) {
      this.numero = numero;
      this.saldo = saldoInicial;
  }

  depositar(valor) {
      this.saldo += valor;
  }

  sacar(valor) {
      if (valor <= this.saldo) {
          this.saldo -= valor;
          return true;
      } else {
          return false;
      }
  }

  verificarSaldo() {
      return this.saldo;
  }
}

module.exports = ContaBancaria;

