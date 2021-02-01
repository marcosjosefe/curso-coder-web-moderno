function calcularCrescimento(altura1, altura2, taxa1, taxa2){
	if (altura1 > altura2){
		if (taxa1 >= taxa2){
			return `A criança 2 não ultrapassará a criança 1.`
		} else {
			return `A criança 2 ultrapassará a 1 em ${calcularTempo(altura2, altura1, taxa2, taxa1)} anos.`
		}
	} else if (altura1 < altura2){
		if (taxa1 <= taxa2){
			return `A criança 1 não ultrapassará a criança 2.`
		} else {
			return `A criança 1 ultrapassará a 2 em ${calcularTempo(altura1, altura2, taxa1, taxa2)} anos.`
		}
	} else {
		if (taxa1 > taxa2){
			return `A criança 1 ultrapassará a 2 em 1 ano.`
		} else if (taxa1 < taxa2){
			return `A criança 2 ultrapassará a 1 em 1 ano.`
		} else {
			return `As crianças possuem mesma altura e mesma taxa de crescimento.`
		}
	}
}

function calcularTempo(alturaCriancaMenor, alturaCriancaMaior, taxaCriancaMenor, taxaCriancaMaior){
	let anos = 0
	while (alturaCriancaMenor <= alturaCriancaMaior){
		alturaCriancaMenor += taxaCriancaMenor
		alturaCriancaMaior += taxaCriancaMaior
		anos++
	}
	return anos
}

console.log(calcularCrescimento(110, 112, 7, 5))
console.log(calcularCrescimento(150, 130, 2, 4))