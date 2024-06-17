//Crie classes Carro e Estacionamento. A classe Carro deve ter propriedades placa e modelo. A classe Estacionamento deve ter um array de carros e métodos para estacionarCarro(), removerCarro() e listarCarros().

class Carro {
  constructor(placa, modelo) {
    this.placa = placa;
    this.modelo = modelo;
  }
}

class Estacionamento {
  constructor() {
    this.carros = [];
  }

  estacionarCarro(carro) {
    this.carros.push(carro);
  }

  removerCarro(placa) {
    const index = this.carros.findIndex(carro => carro.placa === placa);
    if (index !== -1) {
      this.carros.splice(index, 1);
      return true;
    }
    return false;
  }

  listarCarros() {
    // Retorna uma cópia do array de carros para evitar manipulação externa.
    return this.carros.map(carro => ({ placa: carro.placa, modelo: carro.modelo }));
  }
}

module.exports = { Carro, Estacionamento };

