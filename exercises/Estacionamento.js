class Carro {
  constructor(placa, modelo) {
    this.placa = placa;
    this.modelo = modelo;
  }
}

class Estacionamento {
  constructor() { 
    this.carrosEstacionados = [];
  }

  estacionarCarro(carro) {
    this.carrosEstacionados.push(carro);
    console.log(`O carro com placa ${carro.placa} foi estacionado.`);
  }

  removerCarro(placa) {
    const index = this.carrosEstacionados.findIndex(carro => carro.placa === placa);
    if (index !== -1) {
      this.carrosEstacionados.splice(index, 1);
      console.log(`O carro com placa ${placa} foi removido.`);
      return true;
    } else {
      console.log(`O carro com placa ${placa} não está estacionado.`);
      return false;
    }
  }

  listarCarros() {
    return this.carrosEstacionados;
  }
}
module.exports = { Carro, Estacionamento };

