let rankHeroi = ''

function calculadoraPartidas(qtdVitorias, qtdDerrotas){
    resultado = qtdVitorias - qtdDerrotas
    return resultado
}

let saldoVitorias = calculadoraPartidas(89,3)

if (saldoVitorias < 10) {
    rankHeroi = 'Ferro';
} else if (saldoVitorias >= 10 && saldoVitorias < 20) {
    rankHeroi = 'Bronze';
} else if (saldoVitorias >= 20 && saldoVitorias < 50) {
    rankHeroi = 'Prata';
} else if (saldoVitorias >= 50 && saldoVitorias < 80) {
    rankHeroi = 'Ouro';
} else if (saldoVitorias >= 80 && saldoVitorias < 90) {
    rankHeroi = 'Diamante';
} else if (saldoVitorias >= 90 && saldoVitorias < 100) {
    rankHeroi = 'Lendário';
} else if (saldoVitorias >= 100) {
    rankHeroi = 'Imortal';
}

if(rankHeroi != ''){
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${rankHeroi}`)
}