const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPAd Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 19.88, fragil: false }
]

console.log(produtos.filter(function(p){
    return p.preco > 500 && p.fragil
}));