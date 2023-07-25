//  const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  const pares = [];
//  const impares = [];

// //   for of
//  for (num of original) {
    
//      if (num % 2 === 0) {
//          pares.push(num)
//      } else {
//          impares.push(num)
//      }

//  }
//  console.log(pares)
//  console.log(impares)

// //  while


// let num1 = 0

// while (num1 < 10) {
    
//     if (original[num1] % 2 === 0) {
//          pares.push(original[num1])
//     } else {
//         impares.push(original[num1])
//     } 
//     num1++ 
// }
// console.log(pares)
// console.log(impares)

// for tradicional
const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];


for (let num3 = 1; num3 < 11; num3++) {
    if (num3 % 2 === 0) {
        pares.push(num3)
    } else {
        impares.push(num3)
    }
} 
console.log(pares)
console.log(impares)
