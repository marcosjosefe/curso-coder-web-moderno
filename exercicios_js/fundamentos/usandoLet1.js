let numero = 1
{
	let numero = 2 // tem escopo global, de função e de bloco
	console.log('dentro = ', numero)
}
console.log('fora = ', numero)