const produto = {nome: 'caneca', preco: 18}
const outro = {...produto, material: 'porcelana'}
const caneca = Object.assign({}, produto, {material: 'porcelana'})

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'qualquer'
    
} )
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
produto.nome = 'outra'
        //Retorna as chaves do objeto // retorna os valores das chaves
// console.log(Object.keys(produto), Object.values(produto))

            // retorna chave e valor
// console.log(Object.entries(produto))
let kew = 12

 Object.entries(produto).forEach(e =>console.log(e))
