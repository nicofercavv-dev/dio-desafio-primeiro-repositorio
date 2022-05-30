const alunos = [
    {
        nome: 'Nico',
        nota: 9,
        turma: '3A'
    },
    {
        nome: 'Bel',
        nota: 6,
        turma: '1B',
    },
    {
        nome: 'Ramon',
        nota: 7,
        turma: '3B',
    },
    {
        nome: 'Lyssa',
        nota: 10,
        turma: '3A',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];
    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 7));