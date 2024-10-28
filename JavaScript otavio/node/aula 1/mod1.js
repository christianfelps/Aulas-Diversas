class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome =sobrenome;
    }
}

// consigo exportar varias coisas
// module.exports = {nome, Pessoa}
// Consigo exxportar uma coisa de cada vez
this.qualquerCoisa = 'Qualquer coisa'
exports.Pessoa = Pessoa;
console.log(exports)