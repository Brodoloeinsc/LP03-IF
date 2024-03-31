const biblioteca = {
    livros: []
};

function adicionarLivro(biblioteca, novoLivro) {
    biblioteca.livros.push(novoLivro);
}

const livroExemplo = {
    nome: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    mostrarInformacoes: function() {
        console.log(`Livro: ${this.nome}, Autor: ${this.autor}, Ano: ${this.ano}`);
    }
};

adicionarLivro(biblioteca, livroExemplo);

console.log("Informações da Biblioteca:");
biblioteca.livros.forEach(function(livro) {
    livro.mostrarInformacoes();
});