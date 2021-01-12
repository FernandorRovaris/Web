//Funcao em JS é First-Class Object (Citizens)
//Higher-ordem function

//criar de forma literal
function func1() {}


//Armazena em uma variavel
const func2 = function () {}

//Armazenar em um array
const array = [function (a, b) {return a + b}, func1, func2]

console.log(array[0](2, 3));

//Armazenar em um Atributo de objeto
const obj = {}
obj.falar = function (){return 'Opa'}
console.log(obj.falar());


//Passar funcao como parametro
function run(fun){
    fun()
}


run(function () { console.log('Executando...');})


//um funcao pode retornar/conter uma funcao
function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}


soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)