function mediaDoAluno(codigoAluno, nota1, nota2, nota3){
	let media
	if (nota1 > nota2){
		if (nota1 > nota3){ // Nota 1 é a maior.
			media = (nota1 * 4 + nota2 * 3 +  nota3 * 3) /  10
		}
	} else {
		if (nota2 > nota3){ // Nota 2 é a maior.
			media = (nota1 * 3 + nota2 * 4 +  nota3 * 3) /  10
		} else { // Nota 3 é a a maior.
			media = (nota1 * 3 + nota2 * 3 +  nota3 * 4) /  10
		}
	}
	if (media >= 5){
		return `Aluno ${codigoAluno}: APROVADO
Notas: ${nota1}, ${nota2}, ${nota3}. Média: ${media}`
	} else {
		return `Aluno ${codigoAluno}: REPROVADO
Notas: ${nota1}, ${nota2}, ${nota3}. Média: ${media}`
	}
}

console.log(mediaDoAluno(4002, 4, 7, 9))
console.log(mediaDoAluno(8922, 2.8, 6, 3.5))
console.log("---------")

function mediaFinal(codAluno, nota1, nota2, nota3){
	let notas = []
	notas.push(nota1)
	notas.push(nota2)
	notas.push(nota3)
	notas.sort(function(a, b){
		return b - a
	})

	let mediaAluno = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
	return `Aluno: ${codAluno}: ${mediaAluno >= 5 ? 'APROVADO.' : 'REPROVADO.'}
Notas: ${notas[0]}, ${notas[1]}, ${notas[2]}. Média: ${mediaAluno}`
}

console.log(mediaFinal(4002, 4, 7, 9))
console.log(mediaFinal(8922, 2.8, 6, 3.5))