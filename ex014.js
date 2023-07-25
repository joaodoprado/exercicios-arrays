const arrayA = [5, 9, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];
let b = 0
for (let a = 0; a < arrayA.length; a++ ) {

    if (arrayA[a] < arrayB[b]) {
        console.log(arrayA[a])
    } else {
        console.log(arrayB[b])
    }
    b++

}

