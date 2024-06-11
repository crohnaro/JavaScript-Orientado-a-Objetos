//Crie classes Livro e Biblioteca. A classe Livro deve ter propriedades como titulo, autor e disponibilidade. A classe Biblioteca deve ter um array de livros e métodos para adicionarLivro(), emprestarLivro() e devolverLivro().

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
      } else {
          return false;
      }
  }

  devolver() {
      this.disponivel = true;
  }
}

class Biblioteca {
  constructor() {
      this.livros = [];
  }

  adicionarLivro(livro) {
      this.livros.push(livro);
  }

  listarLivros() {
      return this.livros.map(livro => ({
          titulo: livro.titulo,
          autor: livro.autor,
          disponivel: livro.disponivel
      }));
  }

  emprestarLivro(tituloLivro) {
      const livro = this.livros.find(livro => livro.titulo === tituloLivro);
      if (livro) {
          return livro.emprestar();
      } else {
          return false;
      }
  }

  devolverLivro(tituloLivro) {
      const livro = this.livros.find(livro => livro.titulo === tituloLivro);
      if (livro) {
          livro.devolver();
          return true;
      } else {
          return false;
      }
  }
}
module.exports = { Livro, Biblioteca };
