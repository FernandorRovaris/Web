/*setTimeout(() => {
    console.log('Executando callback....');
    setTimeout(() => {
        console.log('Executando callback....');
        setTimeout(() => {
            console.log('Executando callback....');
        }, 2000)
    }, 2000)
}, 2000)
*/


function esperarPor(tempo = 200){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Execultando Promese...');
            resolve()
        },tempo)
    })
}

let p = esperarPor().then(esperarPor).then(esperarPor)