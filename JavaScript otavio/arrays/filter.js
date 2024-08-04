//Filter -> sempre retornar um array, com a mesma quantidade de elementos ou menos

const numeros = [1, 2, 3, 64, 8, 78, 5, 654, 22]


//                               funcao de callback  
const numFilter = numeros.filter(valor=>  valor > 10)



const pessoas = [
    {nome: 'Luizin', idade: 22},
    {nome: 'christia', idade: 24},
    {nome: 'phil', idade: 45},
    {nome: 'ruia', idade: 56},
    {nome: 'milto', idade: 77}
];
const pessoasGrandes = pessoas.filter(obj => obj.nome)
// const pessoasOld = pessoas.filter(obj => obj.idade > 30)
// console.log(pessoasOld)
// const pessoasLetraA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
// console.log(pessoasLetraA)
console.log(pessoasGrandes)