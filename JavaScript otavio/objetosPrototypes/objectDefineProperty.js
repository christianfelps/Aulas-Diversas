function Produto(nome, preco, estoque){
    Object.defineProperty(this, estoque,{
        enumerable: true,//Mostra a chave
        value: estoque,// Valor
        writable: false,// Pode alterar
        configurable: false, // Configuravel
    })
    Object.defineProperties(this,{
        nome: {
            enumerable: true,//Mostra a chave
            value: nome,// Valor
            writable: false,// Pode alterar
            configurable: false, // Configuravel
            },
        preco: {
            enumerable: true,//Mostra a chave
        value: preco,// Valor
        writable: false,// Pode alterar
        configurable: false, // Configuravel
        }
    });
}

