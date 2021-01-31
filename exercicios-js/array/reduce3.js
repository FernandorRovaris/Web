Array.prototype.reduce2 = function(Callback, valorinicial){
    let acumalador = valorinicial + this[0]

    for (let i = 1; i < this.length; i++) {
        acumalador = Callback(acumalador, this[i], i, this)        
    }
    return acumalador
}

const soma = (total, valor) => total + valor
const nums = ['1','2','3','4','5']
console.log(nums.reduce2(soma));