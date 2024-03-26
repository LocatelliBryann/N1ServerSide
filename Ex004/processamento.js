// Escreva um programa que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um array.
// Após isto, o programa deve permitir a leitura de mais de um nome qualquer de pessoa e escrever a mensagem ACHEI,
// se o nome estiver entre os 10 nomes lidos anteriormente (armazenados no array), ou NÃO ACHEI caso contrário 
const entrada = require("./entrada") 
let entrada2 = require('readline-sync')

function processamento() {
    while (true) {
        let nomeBusca = entrada2.question("Insira um nome para buscar: ");
        if (entrada.listaNomes.includes(nomeBusca)) {
            let resultado = "ACHEI";
            return { resultado };
        } else {
            let resultado = "NÃO ACHEI";
            return { resultado };
        }
    }
}

module.exports = { processamento };