const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual 
}


axios.get(url).then(response =>{
    const funcionarios = response.data
    let auxMenor = 0
    let obj;
    

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)


    for (const key in funcionarios) {
        if (funcionarios[key].pais == 'China' && funcionarios[key].genero == 'F' && auxMenor < funcionarios[key].salario){
            obj = funcionarios[key]
        }
    } 

    console.log(obj);
       
})

