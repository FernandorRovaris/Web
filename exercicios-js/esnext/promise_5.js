function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=>{
        if(Math.random() < chanceErro){
            reject('Ocoreu um erro')
        }else{
            resolve(valor)
        }
    })
}


funcionarOuNao('testando...',0.9)
    .then(valor => console.log(`Valor ${valor}`))
    .catch(erro => console.log(`Erro: ${erro}`))