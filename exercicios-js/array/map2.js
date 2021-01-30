const carrinho=[
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

// retornar um array apenas com os precos

    carrinho.map(function(value){            
        console.log(JSON.parse(value).preco);
    })

    const paraObjeto = json => JSON.parse(json)
    const apenasPreco = produto => produto.preco

    const resultado = carrinho.map(paraObjeto).map(apenasPreco)
    console.log(resultado);