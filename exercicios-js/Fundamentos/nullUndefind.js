let valor
console.log(valor)


valor = null
console.log(valor)
//console.log(valor.toString())//Erro!


const produto = {}
console.log(produto.preso)
console.log(produto)

produto.preso = 3.50

console.log(produto)

//produto.preso = undefined
//console.log(!!produto.preso)
delete produto.preso
console.log(produto)

produto.preso = null
console.log(!!produto.preso)
console.log(produto)