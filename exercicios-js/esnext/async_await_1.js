function esperarPor(tempo = 2000){
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(`Executando Promise...`);
            resolve()
        },tempo)
    })
}

//esperarPor().then(esperarPor).then(esperarPor)


async function Executar(){
    await esperarPor()
    console.log('Async/Await 1...');
    await esperarPor()
    console.log('Async/Await 2...');
    await esperarPor()
    console.log('Async/Await 3...');
}

Executar()