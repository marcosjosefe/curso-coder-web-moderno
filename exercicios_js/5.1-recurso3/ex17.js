function aumentoSalarial(plano, salarioAtual){
	switch(plano){
		case "A":
			return salarioAtual * 0.1 + salarioAtual
			break
		case "B":
			return salarioAtual * 0.15 + salarioAtual
			break
		case "C":
			return salarioAtual * 0.2 + salarioAtual
			break
		default:
			return "Plano inválido."
	}
}

console.log(aumentoSalarial("A", 1000))
console.log(aumentoSalarial("B", 1000))
console.log(aumentoSalarial("C", 1000))
console.log(aumentoSalarial("D", 1000))