function teste1(num) {
	if (num > 7) // If sem bloco considerasse apenas uma linha.
		console.log(num)

	console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
	if (num > 7); { // Cuidado com o ';' (ponto e vírgula)
		console.log(num)
	}
}


teste2(6)
teste2(8)