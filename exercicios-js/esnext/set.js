//nao aceita repeticao/ nao é indexado
const times = new Set()

times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times);