function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
     let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,//Mostra a chave
        configurable: true, // Configuravel
        
        get: function (){
            return estoquePrivado }, 
        set: function (valor){
            if(typeof valor !== 'number'){
                throw new TypeError('O valor nao e numerico')
            }
             estoquePrivado = valor}

    })
}

function criaProduto(nome){
    return{
        get nome(){
            return  nome
        },
        set nome(valor){
            nome = valor
        }
    
    }
    }
    const p2 =  criaProduto('Camisa');
    console.log(p2)
    
    // const p1 = new Produto('Camisa', 20, 3 )
    // p1.estoque = 'r'
    // console.log(p1.estoque)