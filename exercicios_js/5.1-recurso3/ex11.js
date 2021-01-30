function anoBissexto(ano) {
	if (ano % 400 == 0) {
		return true
	} else if (ano % 100 == 0) {
		return false
	} else if (ano % 4 == 0) {
		return true
	} else {
		return false
	}
}

console.log(anoBissexto(1600))
console.log(anoBissexto(200))
console.log(anoBissexto(1604))
console.log(anoBissexto(1601))