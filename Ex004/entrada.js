// Escreva um programa que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um array.
// Após isto, o programa deve permitir a leitura de mais de um nome qualquer de pessoa e escrever a mensagem ACHEI,
// se o nome estiver entre os 10 nomes lidos anteriormente (armazenados no array), ou NÃO ACHEI caso contrário 

let entrada = require('readline-sync')

let listaNomes = []
for (let i = 0; i < 10; i++) {
    listaNomes.push(entrada.question("Digite um nome: "))
} 

module.exports = {listaNomes}