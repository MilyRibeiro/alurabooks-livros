// Nosso desafio agora é pegarmos as informações do json, que a colocamos na nossa variável de livros, e exibi-las na tela. 
// let livros = ['JS', 'Python', 'Go'];
// for (let i = 0; i < livros.length; i++) {
//          console.log(livros[i]);
//      }  --> essa forma é muito verbosa para conseguir o resultado que queremos, então vamos usar o forEach().

const elementoParaInserirLivros = document.getElementById('livros');

function exibirOsLivrosNatela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = '';
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
            <div class="livro">
                <img class="livro__imagens" src="${livro.imagem}"
                    alt="${livro.alt}" 
                />
                <h2 class="livro__titulo">
                   ${livro.titulo}
                </h2>
                <p class="livro__descricao">${livro.autor}</p>
                <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${livro.categoria}</span>
                </div>
            </div>
        `;
    });
};