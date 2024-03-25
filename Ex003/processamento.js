// Faça um programa para ler: quantidade atual em estoque, quantidade máxima em estoque
// e quantidade mínima em estoque de um produto contida em um array bidimensional (como uma tabela)
// ou se preferir use uma estrutura de objeto (chave/valor). Calcule e escreva a quantidade média.
// Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra',
// senão escrever a mensagem 'Efetuar compra' 

const entrada = require("./entrada") 

function  processamento() {
    const estoque = {
      Atual : entrada.qntAtualEstoque,
      Maxima : entrada.qntMaxEstoque,
      Minima : entrada.qntMinEstoque
    };
    let mediaEstoque = (estoque.Maxima + estoque.Minima) / 2
    
    if (estoque.Atual >= mediaEstoque) {
      let mensagem = "Nao efetuar compra!"
      return {mensagem, mediaEstoque}
    }else{
      let mensagem = "Efetuar compra!"
      return {mensagem, mediaEstoque}
    }
} 

module.exports = {processamento}