const numeros = [1, 4, 1, 8, 11, 7, 5];
maior = 0
for (let num of numeros) {
    if (maior < num) {
        maior = num
    }
}

console.log(maior)