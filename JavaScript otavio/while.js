// let maior = 0;
// let i = 0;
// while(i < 2){
//     let num1 = prompt('Digite um numero');
   
//     if( num1 > maior){
//         maior = num1 
//     }
//     i++
// }
// alert(`O maior numero digitado foi ${maior}`)

function maior(x, y){
   return x > y ? x : y
}

//arrow function simples sem return e sem chaves
const max = (x, y) =>  x > y ? x : y

console.log(maior(5,14))
console.log(max(8,17))