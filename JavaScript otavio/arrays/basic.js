// const nomes =  ['silveira','junior','eduardo', 'christian', 'oulavo']
// // apaga o ultimo item e posso guardar em uma variavel


// // slice fatia o array indico onde quero comecar e o final e nao e incluido vai pegar o 'junior' e 'eduardo'
// const novo = nomes.slice(1,3)

// //usando indice negativos consigo remover o indice final 'oulavo'

//  novo = nomes.slice(0,-1)
// //posso indicar de onde quero comecar silveira e christian seriam removidos 
// novo = nomes.slice(1,-1)


// const remove = nomes.pop()
// // apaga o Primeiro item e realoca os demais e guardar em uma variavel

// const novo = [...nomes];
// console.log(novo)
// // coloca no comeco
// novo.unshift('ola')
// // remove so comeco
// novo.shift('ola')

// console.log(novo)


const nome =  [ 'Christian', 'felipi', 'alvim' ]
const nomes = nome.join(' ')
// para dividir uma string em espaco
//  const nomes = nome.split(' ');
 console.log(nomes)