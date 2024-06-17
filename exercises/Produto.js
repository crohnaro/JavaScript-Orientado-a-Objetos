//Crie uma classe Produto com propriedades nome, preco e quantidade. Adicione métodos para adicionarEstoque() e vender().

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  
  adicionarEstoque(quantidade) {
    if (quantidade > 0) {
      this.quantidade += quantidade;
      console.log(`${quantidade} unidades adicionadas ao estoque de ${this.nome}.`);
    } else {
      console.log('Quantidade inválida para adicionar ao estoque.');
    }
  }
  
  vender(quantidade) {
    if (quantidade > 0 && quantidade <= this.quantidade) {
      this.quantidade -= quantidade;
      console.log(`${quantidade} unidades de ${this.nome} vendidas.`);
      return true;
    } else if (quantidade > this.quantidade) {
      console.log(`Não há ${quantidade} unidades disponíveis para venda de ${this.nome}.`);
      return false;
    } else {
      console.log('Quantidade inválida para venda.');
      return false;
    }
  }
}
  
  module.exports = Produto;