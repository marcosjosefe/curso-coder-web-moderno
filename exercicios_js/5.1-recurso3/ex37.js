function progressaoAritmetica(qtdTermos, primeiroTermo, razao){
	let resultado = [primeiroTermo]
	for(let i = 1; i < qtdTermos; i++){
		resultado.push(resultado[resultado.length - 1] + razao)
	}
	let somaElementos = ((primeiroTermo + resultado[resultado.length - 1]) * resultado.length) / 2
	return `PA: ${resultado}.
Soma: ${somaElementos}`
}

function progressaoGeometrica(qtdTermos, primeiroTermo, razao){
	let resultado = [primeiroTermo]
	for(let i = 1; i < qtdTermos; i++){
		resultado.push(resultado[resultado.length - 1] * razao)
	}
	let somaElementos = (primeiroTermo * (razao ** resultado.length - 1)) / (razao - 1)
	return `PG: ${resultado}.
Soma: ${somaElementos}`
}

console.log(progressaoAritmetica(5, 4, 8))
console.log(progressaoGeometrica(5, 2, 2))