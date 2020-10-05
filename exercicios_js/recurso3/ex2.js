function tipoTriangulo(x, y, z) {
	if (x == y && x == z) {
		return 'Triângulo equilátero!'
	} else if (x != y && x != z && y != z) {
		return 'Triângulo escaleno!'
	} else if ( x == y || x == z || z == y) {
		return 'Triângulo isósceles!'
	} else {
		return 'Erro!'
	}
}

console.log(tipoTriangulo(3, 5, 7))
console.log(tipoTriangulo(3, 3, 3))

console.log(tipoTriangulo(3, 3, 5))
console.log(tipoTriangulo(3, 5, 3))
console.log(tipoTriangulo(5, 3, 5))