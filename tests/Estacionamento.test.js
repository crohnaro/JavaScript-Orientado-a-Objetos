const { Carro, Estacionamento } = require('../exercises/Estacionamento');

test('Estacionar carro no estacionamento', () => {
    const estacionamento = new Estacionamento();
    const carro = new Carro('ABC-1234', 'Fusca');
    estacionamento.estacionarCarro(carro);
    expect(estacionamento.listarCarros()).toEqual([{ placa: 'ABC-1234', modelo: 'Fusca' }]);
});

test('Remover carro do estacionamento', () => {
    const estacionamento = new Estacionamento();
    const carro = new Carro('ABC-1234', 'Fusca');
    estacionamento.estacionarCarro(carro);
    const result = estacionamento.removerCarro('ABC-1234');
    expect(result).toBe(true);
    expect(estacionamento.listarCarros()).toEqual([]);
});

test('Tentar remover carro que não está no estacionamento', () => {
    const estacionamento = new Estacionamento();
    const result = estacionamento.removerCarro('ZZZ-9999');
    expect(result).toBe(false);
});