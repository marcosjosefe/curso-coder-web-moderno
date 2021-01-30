function bhaskara(a, b, c) {
	let delta = (b ** 2) - (4 * a * c)
	if (delta < 0) {
		return console.log("Delta é negativo.")
	} else {
		let x1 = (-b + delta ** (1/2)) / (2 * a)
		let x2 = (-b - delta ** (1/2)) / (2 * a)
		return console.log(`X' = ${x1}
X'' = ${x2}`)
	}
}

bhaskara(2, -10, 8)
console.log("-----Fim!-----")
bhaskara(1, 8, -9)
console.log("-----Fim!-----")
bhaskara(1, 2, 3)
console.log("-----Fim!-----")
bhaskara(3, -15, 12)