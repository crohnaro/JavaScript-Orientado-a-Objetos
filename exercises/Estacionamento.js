//Crie classes Carro e Estacionamento. A classe Carro deve ter propriedades placa e modelo. A classe Estacionamento deve ter um array de carros e métodos para estacionarCarro(), removerCarro() e listarCarros().//

class Carro {
  constructor(placa, modelo) {
    this.placa = placa;
    this.modelo = modelo;
  }
}

class Estacionamento {
  constructor() {
    this.vagas = [];
  }

  estacionarCarro(carro) {
    this.vagas.push(carro);
  }

  removerCarro(placa) {
    const index = this.vagas.findIndex(carro => carro.placa === placa);
    if (index !== -1) {
      this.vagas.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  listarCarros() {
    return this.vagas;
  }
}

module.exports = { Carro, Estacionamento };
