const pessoas = [
    {nome: 'Vanessa', sobrenome: 'Dutra', idade: 24},
    {nome: 'Diogo', sobrenome: 'Magalhães', idade: 27},
    {nome: 'Alice', sobrenome: 'Ferraz', idade: 69},
    {nome: 'Manuel', sobrenome: 'Nobre', idade: 21},
    {nome: 'Carlos' , sobrenome: 'Evangelista', idade: 37}
];

const maisVelha = pessoas.reduce((ac, valor, i) => {
   if(ac.idade > valor.idade) return ac
   console.log(i)
   return valor
})
console.log(maisVelha)



const numero = [1,2,3];
const total = numero.reduce((acumulador, valor) => {
    //usando como o .filter
    // if(valor % 2 !== 0) acumulador.push(valor)
    // acumulador += valor
    //usando como o .map
      acumulador.push(valor * 2)

    return acumulador
}, [])

