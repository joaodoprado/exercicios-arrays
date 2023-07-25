const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

for (pessoa of filaDeDentro) {
    let filaTotal = filaDeDentro.length + filaDeFora.length;
    if (filaDeDentro.length < filaTotal && filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora[0])
        filaDeFora.shift(0)
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);