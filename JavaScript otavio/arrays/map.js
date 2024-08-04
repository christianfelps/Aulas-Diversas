const numero = [1,2,3,6,4,88,79,65,15];
            // lembrando quando e curto n precisa passar o return
const numeroDobro = numero.map(valor=> valor *2)
    


const pessoas = [
    {nome: 'Vanessa', sobrenome: 'Dutra', idade: 24},
    {nome: 'Diogo', sobrenome: 'Magalhães', idade: 27},
    {nome: 'Alice', sobrenome: 'Ferraz', idade: 19},
    {nome: 'Manuel', sobrenome: 'Nobre', idade: 21},
    {nome: 'Carlos' , sobrenome: 'Evangelista', idade: 37}
];
                            //arrow
const nome = pessoas.map(obj => obj.nome) 
// console.log(nome)
                         //envolvi em paranteses para o JS reconheer as keys
const idade = pessoas.map(obj => ({idade: obj.idade})) 
    // delete obj.nome
    // delete obj.sobrenome
    // return obj

    
    const comIDs = pessoas.map((obj, indice)=>{
        // obj.id = indice + 1;
        const newObj = {...obj}
        newObj.id = indice + 1
        return newObj;
    })
    console.log(comIDs)

    pessoas.forEach(valor=> 
    console.log(valor)
)
