class ContaBancaria {
  constructor(numeroDaConta, saldo = 0) {
    this.numeroDaConta = numeroDaConta
    this.saldo = saldo
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor
      return true
    } 
    else {
      return false
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor
      return true
    } 
    else {
      return false
    }
  }

  verificarSaldo() {
    return this.saldo
  }
}

module.exports = ContaBancaria