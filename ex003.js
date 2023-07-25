const numeros = [54, 22, 14, 10, 284];
let i = 0
let existe = false
for (num of numeros) {
    
    if (num === 10) {
        existe = true
        break;
    }
    i < numeros.length; i++
}
if (existe === true) {
    console.log(i)
} else {
    console.log('-1')
}