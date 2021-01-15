// Closure é o escopo criado quando uma funcao é declarada 
// Esse escop permite a funcao ecessar a manipular variaveis externas a funcao

//Contexto lexico em acao

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());