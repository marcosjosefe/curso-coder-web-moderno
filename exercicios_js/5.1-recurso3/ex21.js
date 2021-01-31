function valorPlano(idade){
	let valorAdicional
	if(idade < 10){
		valorAdicional = 80
	} else if (10 <= idade && idade <= 30){
		valorAdicional = 50
	} else if (30 < idade && idade <= 60){
		valorAdicional = 95
	} else {
		valorAdicional = 130
	}
	return `R$ ${(100 + valorAdicional)}`
}

console.log(valorPlano(9))
console.log(valorPlano(28))
console.log(valorPlano(55))
console.log(valorPlano(72))