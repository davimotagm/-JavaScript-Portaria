let nome = prompt("Informe seu nome");
let idade = prompt("informe sua idade");
let estaAcompanhado = prompt("Está acompanhado, s ou n?");

if (idade >= 18) {
    if (estaAcompanhado === "s") {
        alert(`Entrada permitida para ${nome}: Conceder desconto`)
    } else if (estaAcompanhado === "n") {
        alert(`Entrada permitida para ${nome}: Valor integral`)
    }
} else {
    alert(`Entrada não está permitida para ${nome}: Menor de idade.`)
}