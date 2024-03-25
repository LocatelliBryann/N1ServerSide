const entrada = require("./entrada") 

function  processamento() {
    let imposto = entrada.pFabrica * 45 / 100
    let distribuidor = entrada.pFabrica * 28 / 100
    let custoFinal =  entrada.pFabrica + imposto + distribuidor
    
    return {imposto, distribuidor, custoFinal}
} 

module.exports = {processamento}