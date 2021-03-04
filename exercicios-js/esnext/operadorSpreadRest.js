const funcionario = {
    nome: 'Maria',
    salario: 123.45
}

const clone = {atiovo: true, ...funcionario}
console.log(clone);

const grupoA = ['joão', 'Pedro', 'Gloeria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal);