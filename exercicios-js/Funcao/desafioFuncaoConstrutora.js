function Pessoa(pnome) {
    
    let nome = pnome;

    this.falar = function(){
        console.log(`Meu nome é ${nome}`);
    }

}

const p1 = new Pessoa('Joao')
p1.falar()