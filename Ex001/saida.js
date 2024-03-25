const saida = require("./processamento")
const entrada = require("./entrada")

function mostrarSaida() {
  console.log("Custo de Fabricacao", entrada.pFabrica)
  console.log("Valor Imposto: ", saida.processamento().imposto)
  console.log("Valor Distribuidor: ", saida.processamento().distribuidor)
  console.log("Custo Final: ", saida.processamento().custoFinal)
}
module.exports = {mostrarSaida}