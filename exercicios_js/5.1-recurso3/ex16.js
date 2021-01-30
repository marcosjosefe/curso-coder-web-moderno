function calculadora(a, operacao, b){
	switch(operacao){
		case "+":
			return a + b
			break
		case "-":
			return a - b
			break
		case "*":
			return a * b
			break
		case "/":
			return a / b
			break
		default:
			return "Operação inválida."
	}
}

console.log(calculadora(5, "+", 2))
console.log(calculadora(5, "-", 2))
console.log(calculadora(5, "*", 2))
console.log(calculadora(5, "/", 2))
console.log(calculadora(5, "%", 2))