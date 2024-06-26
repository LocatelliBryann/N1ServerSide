// Faça um programa para ler: quantidade atual em estoque, quantidade máxima em estoque
// e quantidade mínima em estoque de um produto contida em um array bidimensional (como uma tabela)
// ou se preferir use uma estrutura de objeto (chave/valor). Calcule e escreva a quantidade média.
// Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra',
// senão escrever a mensagem 'Efetuar compra' 

const saida = require("./processamento")
const entrada = require("./entrada")

function mostrarSaida() {
  console.log("Estoque Atual: ", entrada.qntAtualEstoque)
  console.log("Estoque Maximo: ", entrada.qntMaxEstoque)
  console.log("Estoque Minimo: ", entrada.qntMinEstoque)
  console.log("Media Estoque: ", saida.processamento().mediaEstoque)
  console.log(saida.processamento().mensagem)
}
module.exports = {mostrarSaida}