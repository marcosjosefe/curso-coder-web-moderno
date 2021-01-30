function fatorial(numero) {
	let resultado = numero
	for (let i = numero - 1; i > 0; i-- ) {
		resultado *= i
	}
	return resultado
}

console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))