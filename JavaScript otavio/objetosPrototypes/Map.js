const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'chri'},
    {id: 1, nome: 'rita'},
];
// const novasPessoas = {}
// for (const {id, nome} of pessoas){
    //     novasPessoas[id] = {id, nome}
    // }
    
//     const novasPessoas = {}
// for(const pessoa of pessoas){
//     const { id } = pessoa;
//     novasPessoas[id] = {...pessoa}
// }
// console.log(novasPessoas)
    const novasPessoas = new Map()
for(const pessoa of pessoas){
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
}
for(const[identifier, {id, nome}] of novasPessoas ){
    console.log(identifier, id, nome)
}
novasPessoas.delete(2)
console.log(novasPessoas)