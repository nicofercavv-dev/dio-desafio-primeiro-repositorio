function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Marta',
    idade: 34,
}
const pessoa2 = {
    nome: 'Darlene',
    idade: 26,
}
const bicho = {
    nome: 'Blob',
    idade: 2,
    raca: 'Daschund',
}

console.log(calculaIdade.call(bicho, 5));