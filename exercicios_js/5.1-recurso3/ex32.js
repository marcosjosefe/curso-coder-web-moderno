function mediaAritmetica(vetor){
	let somaValores = 0
	for(let i = 0; i < vetor.length; i++){
		somaValores += vetor[i]
	}
	return somaValores/vetor.length
}

console.log(mediaAritmetica([1, 2, 3, 4, 5]))