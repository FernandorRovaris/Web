//Objct.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})

console.log('Extensível: ', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.decricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto);


//Object.seal

const pessoa = {nome: 'juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa));

pessoa.sebrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);