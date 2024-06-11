//Crie classes Livro e Biblioteca. A classe Livro deve ter propriedades como titulo, autor e disponibilidade. A classe Biblioteca deve ter um array de livros e métodos para adicionarLivro(), emprestarLivro() e devolverLivro().

class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = true; // Inicia como disponível
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false; // Marca como emprestado
      return true;
    }
    return false;
  }

  devolver() {
    this.disponivel = true; // Marca como disponível novamente
  }
}

class Biblioteca {
  constructor() {
    this.livros = []; // Armazena os livros da biblioteca
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
  }

  listarLivros() {
    return this.livros;
  }
}

module.exports = { Livro, Biblioteca };
