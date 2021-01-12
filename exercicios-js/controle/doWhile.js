function getInteroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


let opcao = 0 

    do {
        opcao = getInteroAleatorioEntre(-1, 10)
        console.log(`Opcao Escolhida foi ${opcao}.`);
    } while (opcao != -1);