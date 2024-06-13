//Crie classes Livro e Biblioteca. A classe Livro deve ter propriedades como titulo, autor e disponivel. A classe Biblioteca deve ter um array de Livros e métodos para adicionarLivro(), emprestarLivro() e devolverLivro().

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true;
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false;
      return true;
    } 
    return false;
    
  }

  devolver() {
    this.disponivel = true;
  }
  
}

class Biblioteca {
  constructor() {
    this.Livros = [];
  }

  adicionarLivro(livro) {
    this.Livros.push(livro);
  }

  listarLivros() {
    return this.Livros;
  }    
}

module.exports = { Livro, Biblioteca };

