class ContaBancaria {
  constructor(numeroDaConta, saldo = 0) {
    this.numeroDaConta = numeroDaConta;
    this.saldo = saldo;
    
  }

  depositar(valor) {
  this.saldo += valor;
  return this.saldo;
     
    
    
  }

  sacar(valor) { 
    if(this.saldo >= valor) {
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
