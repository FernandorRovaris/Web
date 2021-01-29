function MeuObjeto(){}

console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.fala = function(){
    console.log(`Bom Dia! Meu nome é ${this.nome}!`);
}

obj1.fala()

obj2.nome = 'Rafael'
obj2.fala()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.fala() 


//Resumo a locura...

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);