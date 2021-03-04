const fs = require('fs')

function lerAquivo(file){
    return new Promise((resulve)=>{
        fs.readFile(file, 'utf-8',(erro, conteudo)=>{
            resulve(conteudo)  
        })
    })
}

lerAquivo(__dirname + '/dados.txt').then(console.log)

