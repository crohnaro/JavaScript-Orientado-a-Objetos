//Crie uma classe Produto com propriedades nome, preco e quantidade. Adicione métodos para adicionarEstoque() e vender().

class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  adicionarEstoque(quantidade) {
    if (quantidade > 0){
      this.quantidade += quantidade;
      console.log(`${quantidade} unidades adicionadas ao estoque.`);
    }else{
      console.log("A quantidade deve ser maior que zero.");
    }
  }

  vender(quantidade) {
    if (quantidade > 0 && quantidade <= this.quantidade) {
      this.quantidade -= quantidade;
      console.log(`Vendido ${quantidade} unidades de ${this.nome}.`);
      return true;
    } else if (quantidade > this.quantidade) {
      console.log("Não há estoque suficiente para vender.");
      return false;
    } else {
      console.log("A quantidade deve ser maior que zero.");
      return false;
    }
  }
  
}

module.exports = Produto;
