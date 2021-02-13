let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Abacaxi', 'Banana', 'Carambola', 'Damasco']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar(...args){
	let resultado = []
	for(let i = 0; i < arguments.length; i++){
		resultado = resultado.concat(arguments[i])
	}
	return resultado
}

console.log(concatenar(vetorInteiro, vetorString))
console.log(concatenar(vetorDouble, vetorInteiro))