function comprarFruta(fruta) {
		switch(fruta) {
		case "maçã":
			return "Não vendemos maçãs aqui."
			break
		case "kiwi":
			return "Estamos com escassez de kiwis."
			break
		case "melancia":
			return "Aqui está, são 3 reais o quilo."
			break
		default:
			return "Não entendi seu pedido."
			break
	}
}

console.log(comprarFruta("maçã"))
console.log(comprarFruta("kiwi"))
console.log(comprarFruta("melancia"))
console.log(comprarFruta("goiaba"))