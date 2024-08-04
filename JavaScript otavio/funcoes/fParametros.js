
// funcao que sem argumento ela guarda uma variavel que sustenta todos os argumentos enviados

// function funcao(a,b,c,d,e,f) {
//     let sma = 0
// for (let argumento of arguments){
//     sma += argumento
// }
// console.log(sma, a,b,c)
// }

// funcao(2, 1, 2, 3,4,5)

// function funcao({nome, sobrenome, idade}){
  
//     console.log(nome, sobrenome, idade);
// }
// obj = {nome: 'Christian', sobrenome: 'Alvim', idade: 23}
// funcao(obj);
// function funcao([valor1, valor2, valor3]){
  
//     console.log(valor1, valor2, valor3);
// }
// arr = [ 'Christian', 'Alvim', 23]
// funcao(arr);


//operador = +, acumulador = 0, ...numeros recebe o restante dos parametros rest operator tem q ser o ultimo valor dos parametros
// const conta = function (operador, acumulador, ...numeros){
    
//     let sub = 0
//     for(let numero of numeros){
//        if(operador === '+') acumulador += numero;
//        if(operador === '-') acumulador -= numero;
//        if(operador === '*') acumulador *= numero;
//        if(operador === '/') acumulador /= numero;
//         console.log('passe um operador igual a + ou - em string')
    

// }
// }
// console.log(conta('/', 0, 20, 30, 40, 50))


// nao tem arguments em arrow function
const conta =  (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, ...numeros)
}

conta('+', 0, 20, 30, 40, 50)