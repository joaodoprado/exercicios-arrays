const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesA = [];

for (let nome of nomes) {
    if (nome.substring(0,1) == "A" || nome.substring(0,1) == "a") {
        nomesA.push(nome)
    } 
}

console.log(nomesA)