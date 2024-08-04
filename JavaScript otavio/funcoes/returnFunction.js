function soma(a, b) {
    return a + b
}

function criaPessoa(nome, sobrenome) {
    return {
        nome, sobrenome
    }
}



const p1 = criaPessoa('Christian', 'Alvim')

// console.log(p1)

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}

const fala = falaFrase('OLa')
const resto = fala('mundo')
console.log( resto)



function criaMultiplicador(multiplicador){
    return function(n){
        return  n * multiplicador;
    }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)


console.log(duplica(9))
console.log(triplica(9))
console.log(quadriplica(9))