class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo
    this.autor = autor
    this.disponivel = true
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false
      return true
    } 
    else {
      return false
    }
  }

  devolver() {
    this.disponivel = true
  }
}

class Biblioteca {
  constructor() {
    this.livros = []
  }

  adicionarLivro(livro) {
    this.livros.push(livro)
  }

  listarLivros() {
    return this.livros.map(livro => ({
      titulo: livro.titulo,
      autor: livro.autor,
      disponivel: livro.disponivel
    }))
  }
}

module.exports = { Livro, Biblioteca }