function tratarErroElancar(erro) {
    throw new Error('Erro new')
}

function  imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCasse() + '!!!')
    
    } catch (e) {
        tratarErroElancar(e)
    }finally{
        console.log('finally')
    }
        
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)