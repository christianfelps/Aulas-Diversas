const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let i = 0
while (i <= num.length) {
    let numero = num[i];


    if (numero === 2) {
        console.log('Pulei o numero ', numero)
        i++
        continue; // pula para proima iteracao do laco
    }
    console.log(numero)
    if (numero === 7) {
        console.log('7 encontado, saindo do loop')
        break; //para a iteracao do loop
    }
    i++
}
// for (nums of num) {
//     console.log(nums)
// }
// console.log('*******')
// num.forEach((i) => {
//     console.log(i)
// })