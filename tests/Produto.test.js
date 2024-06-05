const Produto = require('../exercises/Produto');

test('Adicionar estoque', () => {
    const produto = new Produto('Camisa', 50, 10);
    produto.adicionarEstoque(5);
    expect(produto.quantidade).toBe(15);
});

test('Vender produto com estoque suficiente', () => {
    const produto = new Produto('Camisa', 50, 10);
    const result = produto.vender(8);
    expect(result).toBe(true);
    expect(produto.quantidade).toBe(2);
});

test('Vender produto com estoque insuficiente', () => {
    const produto = new Produto('Camisa', 50, 10);
    const result = produto.vender(12);
    expect(result).toBe(false);
    expect(produto.quantidade).toBe(10);
});