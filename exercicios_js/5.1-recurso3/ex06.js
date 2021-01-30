function jurosSimples(capital, taxa, tempo) {
	let montante = capital + (capital * taxa * tempo)
	return `R$${montante.toFixed(2).toString().replace(".", ",")}`
}

function jurosComposto(capital, taxa, tempo) {
	let montante = capital * (1 + taxa) ** tempo
	return `R$${montante.toFixed(2).toString().replace(".", ",")}`
}

console.log(jurosSimples(500, 5/100, 30))
console.log(jurosComposto(500, 5/100, 4))