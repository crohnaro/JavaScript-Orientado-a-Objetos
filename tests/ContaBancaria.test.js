const ContaBancaria = require('../exercises/ContaBancaria');

test('Depositar na conta bancária', () => {
    const conta = new ContaBancaria('12345');
    conta.depositar(100);
    expect(conta.verificarSaldo()).toBe(100);
});

test('Sacar da conta bancária com saldo suficiente', () => {
    const conta = new ContaBancaria('12345', 100);
    const result = conta.sacar(50);
    expect(result).toBe(true);
    expect(conta.verificarSaldo()).toBe(50);
});

test('Sacar da conta bancária com saldo insuficiente', () => {
    const conta = new ContaBancaria('12345', 100);
    const result = conta.sacar(150);
    expect(result).toBe(false);
    expect(conta.verificarSaldo()).toBe(100);
});