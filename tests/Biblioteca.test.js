const { Livro, Biblioteca } = require('../exercises/Biblioteca');

test('Adicionar livro à biblioteca', () => {
    const biblioteca = new Biblioteca();
    const livro = new Livro('JavaScript para Iniciantes', 'Autor A');
    biblioteca.adicionarLivro(livro);
    expect(biblioteca.listarLivros()).toEqual([{
        titulo: 'JavaScript para Iniciantes',
        autor: 'Autor A',
        disponivel: true
    }]);
});

test('Emprestar livro disponível', () => {
    const livro = new Livro('JavaScript para Iniciantes', 'Autor A');
    expect(livro.emprestar()).toBe(true);
    expect(livro.disponivel).toBe(false);
});

test('Emprestar livro indisponível', () => {
    const livro = new Livro('JavaScript para Iniciantes', 'Autor A');
    livro.emprestar();
    expect(livro.emprestar()).toBe(false);
});

test('Devolver livro', () => {
    const livro = new Livro('JavaScript para Iniciantes', 'Autor A');
    livro.emprestar();
    livro.devolver();
    expect(livro.disponivel).toBe(true);
});