function corrigirValor(valor) {
	return `R$${valor.toFixed(2).toString().replace(".", ",")}`
	valor.lenght
}

console.log(corrigirValor(0.1+0.2))