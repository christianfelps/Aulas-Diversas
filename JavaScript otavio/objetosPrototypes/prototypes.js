// Construtora = molde (classe)
function Pessoa(nome, sobrenome){
   
        this.nome = nome;
        this.sobrenome = sobrenome;
    //     this.nomeCompleto = ()=> {
    //         return `Original ${this.nome} ${this.sobrenome}`
    //     }
   }
        //Pessoa.prototype
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}
// instancia
const pessoa = new Pessoa('Christian', 'Alvim');
const pessoa1 = new Pessoa('olia', 'Alvim');



// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__ : Object.prototype
};
const objB = {
    chaveB: 'B'
    // __proto__ : Object.prototype
};

const objC= new Object()
objC.chaveC = 'C'
// configura/Altera Propriedades do Prototype
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

        //mostra o valor do prototype
// console.log(Object.getPrototypeOf(objC))


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
//Metodo de heranca.
Produto.prototype.desconto = function(porcent){
    this.preco = this.preco - (this.preco * (porcent / 100))
}
//Metodo de heranca.
Produto.prototype.aumento = function(porcent){
    this.preco = this.preco + (this.preco * (porcent / 100))
}

let p1 = new Produto('fone', 56)

// setei esse objeto literal, e ele se tornou parte do objeto Produto 
const p2 = {
    nome: 'caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(5)

const p3 = Object.create(Produto.prototype, {
    preco:{
        writable: true,
        enumerable: true,
        value: 44,
        configurable: true
    },
    tamanho2:{
        writable: true,
        enumerable: true,
        value: 84,
        configurable: true
    }
});
p3.aumento(10)
console.log(p3.preco)