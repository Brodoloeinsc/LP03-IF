const monuments = ["Torre Eiffel", "Coliseu", "Machu Picchu", "Estátua da Liberdade", "Taj Mahal"];
console.log("Monumentos:", monuments);

function adicionarMonumento(monumentos, novoMonumento) {
    const novoArray = [...monumentos];
    novoArray.push(novoMonumento);
    novoArray.sort();
    return novoArray;
}
function removerPrimeiroMonumento(monumentos) {
    const novoArray = [...monumentos];
    novoArray.shift();
    return novoArray;
}

const monumentosAtualizados = adicionarMonumento(monuments, "Outro monumento");
console.log("Monumentos Atualizados:", monumentosAtualizados);

const monumentosSemPrimeiro = removerPrimeiroMonumento(monumentosAtualizados);
console.log("Monumentos Sem Primeiro:", monumentosSemPrimeiro);