function maiorEMenorNumero(vetor){
	vetor.sort(function(a, b){
		return a - b
	})
	return `O menor valor é ${vetor[0]}.
O maior valor é ${vetor[vetor.length - 1]}`
}

console.log(maiorEMenorNumero([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]))