const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

const resultado2 = nota => nota >= 7

console.log(resultado2(8))
console.log(resultado2(6))