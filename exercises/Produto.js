//Crie uma classe Produto com propriedades nome, preco e quantidade. Adicione métodos para adicionarEstoque() e vender().

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
  }

  adicionarEstoque(quantidade) {
    if (quantidade > 0) {
      this.quantidade += quantidade
      console.log("${quantidade} unidades de ${this.nome} adicionar estoque.");
    } else {
      console.log(" Quantidade invalida. A quantia devera ser maior que zero")
    }
  }

  vender(quantidade) {
    if (quantidade > 0 && quantidade <= this.quantidade) {
      this.quantidade -= quantidade;
      console.log("${quantidade} unidades de ${this.nome} vendidas.");
      return true;
    } else {
      console.log("Quantidade inválida para venda ou estoque insuficiente.");
      return false;
    } 
  }
}

module.exports = Produto;
