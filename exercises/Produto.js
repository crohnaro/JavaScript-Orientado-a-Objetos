class Produto {
  constructor(nome, preco, quantidade) { 
    this.nome = nome;
    this.preco = preco;
    this.quantidade =  quantidade;
    
  }

  adicionarEstoque(quantidade) { 
    this.quantidade += quantidade;
    console.log(` Foram adicionados ${quantidade} itens ao estoque de ${this.nome}.`);
    
  }

  vender(quantidade) {
    if (quantidade <= this.quantidade) {
      this.quantidade -= quantidade;
      console.log(`Foram vendidos ${quantidade} itens de ${this.nome}.`);
      return  true;
    } else{
      console.log(`Não há estoque suficiente de ${this.nome} para realizar a venda`);
      return false;
    }
    
  }
}

module.exports = Produto;
