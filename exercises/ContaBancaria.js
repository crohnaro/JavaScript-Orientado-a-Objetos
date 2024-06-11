//Crie uma classe ContaBancaria com propriedades numeroDaConta, saldo e métodos depositar() e sacar(). Adicione validações para garantir que não seja possível sacar mais do que o saldo disponível.
class ContaBancaria {
  constructor(numeroDaConta, saldo = 0) {
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldo;

    
  }

  depositar(valor) {
    if (valor <= 0) {

      throw new Error ("O valor do depósito deve ser maior do que zero");
    }
    this.saldo += valor;
    return this.saldo;
    
  }

  sacar(valor) {
    if (valor <= 0) {
      throw new Error ("O valor do saque deve ser maior que zero");
    }
    if (valor > this.saldo) {

      return false;
    }
    this.saldo -= valor;
    return true;
    
  }

  verificarSaldo() {
    return this.saldo;
    
  }
}



module.exports = ContaBancaria;
