const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro
console.log(pilotos);

pilotos.push('Verstappen')
console.log(pilotos);

pilotos.shift() // remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton')
console.log(pilotos);

//Splice pode adionar e remover elementos

//adiciona
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos);

//remover
pilotos.splice(3, 1)
console.log(pilotos);

const algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4)