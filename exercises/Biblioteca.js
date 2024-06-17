//Crie classes Livro e Biblioteca. A classe Livro deve ter propriedades como titulo, autor e disponibilidade. A classe Biblioteca deve ter um array de livros e métodos para adicionarLivro(), emprestarLivro() e devolverLivro().

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true; // Livro começa disponivel.
  }
 
  emprestar() {
    if (this.disponivel) {
      this.disponivel = false; // Livro emprestado.
      return true;
    }
    return false;
  }
 
  devolver() {
    this.disponivel = true; // Livro volta a ficar disponivel.
  }
}
 
class Biblioteca {
  constructor() {
    this.livros = []; // Adicionar Livros a biblioteca.
  }
 
  adicionarLivro(livro) {
    this.livros.push(livro);
  }
 
  listarLivros() {
    return this.livros;
  }
}
 
module.exports = { Livro, Biblioteca };
 