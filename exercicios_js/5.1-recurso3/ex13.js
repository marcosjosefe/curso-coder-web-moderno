function queDiaHoje(dia) {
	switch(dia) {
		case 1:
			return "Hoje é fim de semana."
			break
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			return "Hoje é dia útil."
			break
		case 7:
			return "Hoje é fim de semana."
			break
		default:
		 return "Data inválida."
	}
}

console.log(queDiaHoje(1))
console.log(queDiaHoje(2))
console.log(queDiaHoje(3))
console.log(queDiaHoje(4))
console.log(queDiaHoje(5))
console.log(queDiaHoje(6))
console.log(queDiaHoje(7))
console.log(queDiaHoje(8))
console.log(queDiaHoje("abacaxi"))