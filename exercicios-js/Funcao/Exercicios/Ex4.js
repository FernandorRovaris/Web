/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
       e o resto da divisão destes dois valores.
*/


function div(dividendo, divisor){
    console.log(`Resultado ${Math.floor(dividendo / divisor)},  Resto ${ dividendo % divisor}`);
}

div(3,2)