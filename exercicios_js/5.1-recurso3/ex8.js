function pontuacao(pontuacoes) {
	let pntsArray = pontuacoes.split(" ")
	let recordesBatidos = 0
	let piorPontuacao = 1000
	for (let i = 1; i < pntsArray.length; i ++) {
		if (pntsArray[i] < pntsArray[i-1]) {
			recordesBatidos += 1
		}
		if (i < piorPontuacao) {
			piorPontuacao = pntsArray[i]
			let piorJogo = i = 1
		}
	}
	return console.log(`[${recordesBatidos}, ${piorJogo}]`)
}

pontuacao("10 20 20 8 25 3 0 30 1")