function imparesEntre(inicio, fim){
	let a
	let b
	if(inicio > fim){
		a = fim
		b = inicio	
	} else {
		a = inicio
		b = fim
	}
	for(a; a < b; a++){
		if(a % 2 != 0){
			console.log(a)
		}
	}
}

imparesEntre(0, 100)
console.log('-x-')
imparesEntre(100, 0)