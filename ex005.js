const original = [1, 4, 12, 21, 53, 88, 112];
const novoArray = [];
for(par of original) {
    if (par % 2 === 0) {
        novoArray.push(par)
    }
}

console.log(novoArray)