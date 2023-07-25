const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];
const novoArray = [];

for (num of original) {
    if (num <= 20 && num >= 10 || num > 100) {
        novoArray.push(num)
    }
}

console.log(novoArray)