const tecnologias = new Map()
tecnologias.set('react',{freamework: false})
tecnologias.set('angular',{freamework: true})

console.log(tecnologias.react);
console.log(tecnologias.get('react').freamework);


const chavesVariadas = new Map([
    [function teste(){}, 'Funcao'],
    [{}, 'Object'],
    [123, 'Numero']
])

chavesVariadas.forEach((valor, chave)=>{
    console.log(chave,valor);
})

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);