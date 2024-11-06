// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let cart = [];

// Rota para listar os produtos no carrinho
app.get('/cart', (req, res) => {
    res.json(cart);
});

// Rota para adicionar um produto ao carrinho
app.post('/cart', (req, res) => {
    const product = req.body;
    if (product && product.name && product.price) {
        cart.push(product);
        res.status(201).json({ message: 'Produto adicionado ao carrinho!', product });
    } else {
        res.status(400).json({ message: 'Dados do produto incompletos.' });
    }
});


