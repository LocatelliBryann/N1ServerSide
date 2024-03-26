// Escreva um programa que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um array.
// Após isto, o programa deve permitir a leitura de mais de um nome qualquer de pessoa e escrever a mensagem ACHEI,
// se o nome estiver entre os 10 nomes lidos anteriormente (armazenados no array), ou NÃO ACHEI caso contrário 

const saida = require("./processamento")
const entrada = require("./entrada")

function mostrarSaida() {
  console.log(entrada.listaNomes)
  console.log(saida.processamento().resultado)
  
}
module.exports = {mostrarSaida}