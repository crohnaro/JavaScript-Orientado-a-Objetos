//Crie classes Carro e Estacionamento. A classe Carro deve ter propriedades placa e modelo. A classe Estacionamento deve ter um array de carros e métodos para estacionarCarro(), removerCarro() e listarCarros().

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
  }

  removerCarro(placa) {
      const index = this.carrosEstacionados.findIndex(carro => carro.placa === placa);
      if (index !== -1) {
          this.carrosEstacionados.splice(index, 1);
          return true;
      } else {
          return false;
      }
  }

  listarCarros() {
      return this.carrosEstacionados.map(carro => ({
          placa: carro.placa,
          modelo: carro.modelo
      }));
  }
}

module.exports = { Carro, Estacionamento };

