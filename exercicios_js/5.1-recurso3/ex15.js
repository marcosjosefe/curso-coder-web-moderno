function comprarCarro(carro){
	switch(carro){
		case "hacth":
			return "Compra efetuada com sucesso"
			break
		case "sedan":
		case "motocicleta":
		case "caminhonete":
			return "Tem certeza que não prefere este modelo?"
			break
		default:
			return "Não trabalhamos com este tipo de automóvel aqui."
			break
	}
}

console.log(comprarCarro("hacth"))
console.log(comprarCarro("sedan"))
console.log(comprarCarro("motocicleta"))
console.log(comprarCarro("caminhonete"))
console.log(comprarCarro("van"))