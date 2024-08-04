class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome =sobrenome
    }
}

// consigo exportar varias coisas
// module.exports = {nome, Pessoa}
// Consigo exxportar uma coisa de cada vez
exports.Pessoa = Pessoa