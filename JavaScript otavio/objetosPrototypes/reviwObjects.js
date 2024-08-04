// jeito comum de criar um objeto
const pessoa = {
    nome: 'christian',
    sobrenome: 'Alvim'
}

//outro jeito de criar um objeto
const pessoa1 = new Object()
pessoa1.nome = 'Christian'
pessoa1.sobrenome = 'Oulavo'
pessoa1.idade = 24
pessoa1.falarNome = function () {return (`meu nome e ${this.nome}`)}
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
    }

const chave = 'nome'
// console.log(pessoa1.getDataNascimento())
//deletar propriedades de um objeto
// delete pessoa1.nome
// for (let v in pessoa1){
//     console.log(pessoa1[v])
// }
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const eu = criaPessoa('Chris', 'Rui');
console.log(eu.nomeCompleto)

function Pessoa(nome, sobrenome){
this.nome = nome;
this.sobrenome =sobrenome
Object.freeze(this)
}
const p1 = new Pessoa('Ola', 'mundo')
