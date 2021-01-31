function valorAnuidade(mes, valor){
	return `R$ ${(valor * 1.05 ** (mes - 1)).toFixed(2).replace(".", ",")}`
}

console.log(valorAnuidade(1, 150))
console.log(valorAnuidade(5, 150))