// Produto -> aumento e desconto
// Camiseta, Caneca

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor ){
    Produto.call(this, nome, preco);
    this.cor = cor;
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
   
    Object.defineProperty(this, 'estoque',  {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        }, 
        set: function(valor){
            if(typeof valor !== 'number') return
            estoque = valor
        }
    })
}


Camiseta.prototype = Object.create(Produto.prototype);

Camiseta.prototype.constructor = Camiseta;

Caneca.prototype = Object.create(Produto.prototype);

Caneca.prototype.constructor = Caneca;

//metodo de sobreescrita de heranca
Camiseta.prototype.aumento = function(porcent){
    this.preco = this.preco + (this.preco * (porcent / 100))
}

const camiseta = new Camiseta('regate', 7.8, 'preta');
camiseta.aumento(100)





const canec1 = new Caneca('Batman', 85, 'porcelana', 89)

canec1.aumento(5)
console.log(canec1.preco);