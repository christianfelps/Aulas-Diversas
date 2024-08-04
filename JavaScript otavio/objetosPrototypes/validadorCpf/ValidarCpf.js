// 705.484.450 070.987.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2 
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro Digito)
Se o numero digito for maior que = 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 =284

11 - (284 % 11) = 2 (Segundo Digito)
Se o numero Digitado for maior que 9, consideramos 0.
*/
//012345678 91
//502193278 07
// let cpfInput = document.querySelector('#validar')

function ValidarCpf(){
    
let cpfInput = document.querySelector('.inpVal')


//Removendo caracteres especiais
let cpfLimpo = cpfInput.value.replace(/\D+/g, '')

//converter string em Array
cpfArray = Array.from(cpfLimpo)

// Remove os dois últimos dígitos (verificadores)
cpfArray.splice(9,2)
// console.log(cpfArray.length)

const primeiroDigito = calcularDigito(cpfArray, 10)
cpfArray.push(primeiroDigito )

const segundoDigito = calcularDigito(cpfArray, 11)
cpfArray.push(segundoDigito)



// console.log(cpfArray.length)
function calcularDigito(cpf, iterador){
    let i = iterador
    let cpfAcumulado = cpf.reduce((acc, e) => {
        acc += Number(e) * i
        // console.log(acc, i)
        i--;
        return acc 
        
    }, 0);
    let digito = 11 -(cpfAcumulado % 11)
    return digito >= 10 ? 0 : digito
}




cpfArray.forEach(e => console.log(e)
);
let exibirTela = document.querySelector('.resposta')

if(cpfLimpo.endsWith(`${primeiroDigito}${segundoDigito}`)){
       exibirTela.innerHTML = 'Cpf valido'
       exibirTela.style.color = 'blue'

}else{
    exibirTela.innerHTML = 'Cpf Invalido'
    exibirTela.style.color = 'red'
}

}

document.addEventListener('click', (e)=>{
     
    if(e.target.classList.contains('btn-validar')){
        ValidarCpf()
    }
})
