function avaliaPontuacoes(valores) {
	let pontuacoes = valores.split(" ")
	let qtdQuebraRecordes = 1
	let menorPontuacao = pontuacoes[0]
	let maiorPontuacao = pontuacoes[0]
	let piorJogo = 1

	for (let i = 1; i < pontuacoes.length; i++) {
		if (pontuacoes[i] > maiorPontuacao) {
			maiorPontuacao = pontuacoes[i]
			qtdQuebraRecordes++
		}else if (pontuacoes[i] < menorPontuacao) {
			menorPontuacao = pontuacoes[i]
			piorJogo = i+1
		}
	}
	return [qtdQuebraRecordes, piorJogo]
}

console.log(avaliaPontuacoes("10 20 20 8 25 3 0 30 1"))