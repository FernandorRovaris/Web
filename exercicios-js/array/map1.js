const nums = [1, 2, 3, 4, 5]

// For com propósito

let resultados = nums.map(function(e){
    return e *2
})

console.log(resultados, nums);


const somar10 = e=> e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultados = nums.map(somar10).map(triplo).map(paraDinheiro)
console.log(resultados);