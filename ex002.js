const letras = ["A", "e", "B", "C", "E", "z"]

let quantidade = 0;

for(let letra of letras) {
    if (letra ===  'E' || letra === 'e') {
        quantidade++;
    }
}

if (quantidade == 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.')
} else {
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`)
}