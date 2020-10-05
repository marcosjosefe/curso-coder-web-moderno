function criarProduto(nome, preco) {
	return {
		nome: nome,
		preco,
		desconto: 0.1
	}
}

console.log(criarProduto('abacaxi', 2.5))