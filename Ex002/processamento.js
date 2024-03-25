/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
  mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas.
  Escrever um programa que leia o número de carros por ele vendidos, o valor total de suas vendas,
  o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor */

const entrada = require("./entrada") 

function  processamento() {
    let comFixa = 100 * entrada.nVendidos //comissão fixa de R$100,00 por carro vendido
    let comVendas = entrada.valorVendas * 5 / 100
    let salFinal = entrada.salFixo + comFixa + comVendas
    
    return {salFinal}
} 

module.exports = {processamento}