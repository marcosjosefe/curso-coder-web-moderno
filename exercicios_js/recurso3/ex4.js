function divisao(divisor, dividendo) {
	return `${divisor} / ${dividendo} = ${divisor/dividendo}
	resto: ${divisor%dividendo}`
}

console.log(divisao(5,2))
console.log(divisao(49,7))