const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice, a){
    console.log(`${indice + 1}. ${nome}   =   ${a}`);
}


fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){
    console.log(a);
})