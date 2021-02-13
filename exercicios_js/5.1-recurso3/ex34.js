function mesmosCaracteres(string1, string2){
	let estaContido = true
	let palavra1 = string1.toLowerCase()
	let palavra2 = string2.toLowerCase()
	for(let i = 0; i < palavra1.length; i++){
		for(let x = 0; x < palavra2.length; x++){
			if(palavra1[i] == palavra2[x]){
				estaContido = true
				break
			} else {
				estaContido = false
			}
		}
		if(!estaContido){
			return estaContido
		}
	}
	return estaContido
}

console.log(mesmosCaracteres('abc', 'cba'))
console.log(mesmosCaracteres('abd', 'cba'))
console.log(mesmosCaracteres('abc', 'cbd'))