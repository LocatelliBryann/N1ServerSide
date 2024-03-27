// Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% 
// e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule e
// escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, 
// mantidas as taxas de crescimento

const saida = require("./processamento")

function mostrarSaida() {
  console.log("Serao necessarios", saida.processamento().a," anos para a populacao do pais A igualar ou ultrapassar a polulacao do pais B.")
  
}
module.exports = {mostrarSaida}
