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
      console.log("${quantidade} unidades de ${this.nome} adicionadas ao estoque.");
    } else {
      console.log(" Quantidade invalida.")
    }
  }
 
  vender(quantidade) {
    if (quantidade > 0 && quantidade <= this.quantidade) {
      this.quantidade -= quantidade;
      console.log("${quantidade} unidades de ${this.nome} vendidas.");
      return true;
    } else {
      console.log("Quantidade inválida.");
      return false;
    }
  }
}
 
module.exports = Produto;
