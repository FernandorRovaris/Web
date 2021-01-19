/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
        Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
        Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
        ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um  
        triângulo).
*/


function ClassificaTriangulo(ladA, ladB, ladC){

    if(ladA === ladB && ladA === ladC){
        console.log('Equilátero');
    }else if(ladA !== ladB && ladA !== ladC && ladB !== ladC){
        console.log('Escaleno');
    }else{
        console.log('Isósceles');
    }
}

ClassificaTriangulo(5,5,5)
ClassificaTriangulo(6,5,5)
ClassificaTriangulo(5,6,5)
ClassificaTriangulo(5,5,6)
ClassificaTriangulo(5,4,6)