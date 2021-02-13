let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7 , 8, 9, 10]

function adicionar(vetor1, vetor2){
	for(let i = 0; i < vetor2.length; i++){
		console.log(vetor2[i])
		vetor1.push(vetor2[i])
	}
	console.log('Vetor adicionado: ' + vetor2)
	console.log('Vetor resultado: ' + vetor1)
}

adicionar(vetorPilha, vetorAdiciona)