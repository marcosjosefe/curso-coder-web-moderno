function multiplicaVetor(vetor, multiplicador){
	let resultado = []
	vetor.forEach(elemento => {
		resultado.push(elemento * multiplicador)
	})
	return resultado
}

function multiplicaVetorMaior5(vetor, multiplicador){
	let resultado = []
	vetor.forEach(elemento => {
		if(elemento*multiplicador > 5){
			resultado.push(elemento * multiplicador)
		}
	})
	return resultado
}

console.log(multiplicaVetor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
console.log(multiplicaVetorMaior5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2))