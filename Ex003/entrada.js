// Faça um programa para ler: quantidade atual em estoque, quantidade máxima em estoque
// e quantidade mínima em estoque de um produto contida em um array bidimensional (como uma tabela)
// ou se preferir use uma estrutura de objeto (chave/valor). Calcule e escreva a quantidade média.
// Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra',
// senão escrever a mensagem 'Efetuar compra' 

let entrada = require('readline-sync')

let qntAtualEstoque = entrada.questionInt("Quantidade atual em estoque: ")
let qntMaxEstoque = entrada.questionInt("Quantidade maxima em estoque: ")
let qntMinEstoque = entrada.questionInt("Quantidade minima em estoque: ")

module.exports = {qntAtualEstoque, qntMaxEstoque, qntMinEstoque}