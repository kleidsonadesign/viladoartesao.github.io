

function produtospage(){

    let div_produto = document.getElementById("div_produto");

    fetch("../JSON/produto.json").then((response) =>{
        response.json().then((dados)=>{
            dados.produtos.map((produtos) => {
                
                div_produto.innerHTML += ` 
                <div class="col-lg-4 col-12 mb-3">
                <div class="product-thumb">
                    <a href="product-detail.html#id_pro=${produtos.id}%id_art=${produtos.id_artesao}">
                        <img src="${produtos.imagem_produto}" class="img-fluid product-image" alt="">
                    </a>

                   

                    <div class="product-info d-flex">
                        <div>
                            <h5 class="product-title mb-0">
                                <a href="product-detail.html#id_pro=${produtos.id}%id_art=${produtos.id_artesao}" class="product-title-link">${produtos.nome}</a>
                            </h5>

                            <p class="product-p">${produtos.descricao}</p>
                        </div>

                    </div>
                </div>
            </div>`
            })
            
        })
    })
}

// Rota para remover um produto do carrinho pelo nome
app.delete('/cart/:name', (req, res) => {
    const productName = req.params.name;
    cart = cart.filter(product => product.name !== productName);
    res.json({ message: 'Produto removido do carrinho!', cart });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const app = express();
const PORT = 3000;

app.use(cors()); // Usa o middleware CORS
app.use(express.json());

const produtos = [
    { id: 1, nome: 'Produto A', preco: 50, descricao: 'Descrição do Produto A', imagem: 'url_da_imagem_a' },
    { id: 2, nome: 'Produto B', preco: 100, descricao: 'Descrição do Produto B', imagem: 'url_da_imagem_b' },
    { id: 3, nome: 'Produto C', preco: 150, descricao: 'Descrição do Produto C', imagem: 'url_da_imagem_c' }
];

app.get('/api/products', (req, res) => {
    res.json(produtos);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});