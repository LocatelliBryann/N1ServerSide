/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
  mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas.
  Escrever um programa que leia o número de carros por ele vendidos, o valor total de suas vendas,
  o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor */

let entrada = require('readline-sync')

let nVendidos = entrada.questionInt("Qual o numero de carros vendidos? ")
let valorVendas = entrada.questionFloat("Qual o valor total de vendas? ")
let salFixo = entrada.questionFloat("Qual o salario fixo? ")

module.exports = {nVendidos, valorVendas, salFixo}