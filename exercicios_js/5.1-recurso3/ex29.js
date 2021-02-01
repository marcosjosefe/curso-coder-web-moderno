function intervaloDentroFora(vetorNumeros){
	let intervaloDentro = 0
	let intervaloFora = 0
	for (let i = 0; i < vetorNumeros.length; i++){
		if (vetorNumeros[i] >= 10 && vetorNumeros[i] <= 20){
			intervaloDentro++
		} else {
			intervaloFora++
		}
	}
	return `Há ${intervaloDentro} números dentro do intervalo e ${intervaloFora} números fora.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
console.log(intervaloDentroFora(vetor))