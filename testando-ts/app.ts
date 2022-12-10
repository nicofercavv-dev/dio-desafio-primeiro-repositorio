const Pessoa1 = {
    nome: "Nico",
    idade: 19,
    profissao: "desenvolvedora"
};

const Pessoa2: {nome: string, idade: number, profissao: string} = {
    nome: "Blake",
    idade: 32,
    profissao: "data scientist"
};

const Pessoa3: {nome: string, idade: number, profissao: string} = {
    nome: "Márcia",
    idade: 36,
    profissao: "Desenvolvedora"
};

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    DataScientist
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

const Pessoa4: Pessoa = {
    nome: "Vanessa",
    idade: 24,
    profissao: Profissao.Desenvolvedora
}

const Pessoa5: Pessoa = {
    nome: "Maria",
    idade: 27,
    profissao: Profissao.Desenvolvedora
}