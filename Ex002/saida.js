/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
  mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas.
  Escrever um programa que leia o número de carros por ele vendidos, o valor total de suas vendas,
  o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor */

const saida = require("./processamento")
const entrada = require("./entrada")

function mostrarSaida() {
  console.log("Numero de carros vendidos: ", entrada.nVendidos)
  console.log("Valor total das vendas: ", entrada.valorVendas)
  console.log("Salario fixo: R$", entrada.salFixo)
  console.log("Salario final vendedor: R$", saida.processamento().salFinal)
}
module.exports = {mostrarSaida}