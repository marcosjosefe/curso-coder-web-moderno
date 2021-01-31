function notasAReceber(valor){
	let notaDeCem = 0
	let notaDeCinquenta = 0
	let notaDeDez = 0
	let notaDeCinco = 0
	let notaDeUm = 0

	while (valor != 0){
		if (valor - 100 >= 0){
			valor = valor - 100
			notaDeCem++
		} else if (valor - 50 >= 0){
			valor = valor - 50
			notaDeCinquenta++
		} else if (valor - 10 >= 0){
			valor = valor - 10
			notaDeDez++
		} else if (valor - 5 >= 0){
			valor = valor - 5
			notaDeCinco++
		} else {
			valor = valor - 1
			notaDeUm++
		}
	}
	return qtdNotas(notaDeCem, notaDeCinquenta, notaDeDez, notaDeCinco, notaDeUm)
}

function qtdNotas(notaDeCem, notaDeCinquenta, notaDeDez, notaDeCinco, notaDeUm){
	let notas = ``

	if (notaDeCem != 0){
		notas += `${notaDeCem} notas(s) de R$ 100. `
	}
	if (notaDeCinquenta != 0){
		notas += `${notaDeCinquenta} notas(s) de R$ 50. `
	}
	if (notaDeDez != 0){
		notas += `${notaDeDez} notas(s) de R$ 10. `
	}
	if (notaDeCinco != 0){
		notas += `${notaDeCinco} notas(s) de R$ 5. `
	}
	if (notaDeUm != 0){
		notas += `${notaDeUm} notas(s) de R$ 1.`
	}
	return notas
}

console.log(notasAReceber(188))