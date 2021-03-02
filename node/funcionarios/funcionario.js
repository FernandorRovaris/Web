const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//forma feita na correção
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual 
}


axios.get(url).then(response =>{
    const funcionarios = response.data
    
    let auxMenor = 999999999999
    let obj;
    for (const key in funcionarios) {
        if (funcionarios[key].pais == 'China' && funcionarios[key].genero == 'F' && auxMenor > funcionarios[key].salario){
           auxMenor = funcionarios[key].salario;
           obj = funcionarios[key]
        }
    } 
    console.log(obj);

    //Resultado Correção
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func);
    
       
})
