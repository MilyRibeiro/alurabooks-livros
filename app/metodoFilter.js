// const botaoFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');
const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => botao.addEventListener('click', filtrarLivros));


function filtrarLivros() {
    const elementoBotao = document.getElementById(this.id);
    const categoria = elementoBotao.value;
    let livrosFiltrados = categoria == 'disponivel' ? 
        livros.filter(livro => livro.categoria == categoria) : 
        livros.filter(livro => livro.quantidade > 0);
        // Dessa forma, primeiro ele verifica as categorias que existem, depois ele confere se eles possuem a quantidade acima de 0.
        
    // console.table(livrosFiltrados);
    exibirOsLivrosNaTela(livrosFiltrados);
};
