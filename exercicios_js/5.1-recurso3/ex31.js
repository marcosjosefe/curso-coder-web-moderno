function contarNegativos(vetor){
	let contador = 0
	for(let i = 0; i < vetor.length; i++){
		if(vetor[i] < 0){
			contador++
		}
	}
	return contador
}

console.log(contarNegativos([10, 5, -7, 3, -1, 3, -11, -20, 6, 9]))