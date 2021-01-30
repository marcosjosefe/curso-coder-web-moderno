function sistemaNotas(nota) {
    if (nota < 38 || (nota % 5) <= 2) {
        return nota 
    } else if (nota >= 38 && (nota % 5) > 2) {
        return nota + (5 - (nota%5))
    }
}

console.log(sistemaNotas(38))
console.log(sistemaNotas(37))
console.log(sistemaNotas(84))
console.log(sistemaNotas(72))
console.log(sistemaNotas(55))
console.log(sistemaNotas("Opa!"))