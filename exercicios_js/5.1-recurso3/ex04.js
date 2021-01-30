function divisao(divisor, dividendo) {
	return `${divisor} / ${dividendo} = ${Math.floor(divisor/dividendo)}
	resto: ${divisor%dividendo}`
}

console.log(divisao(5,2))
console.log(divisao(49,7))