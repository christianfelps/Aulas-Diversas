// Declaracao de funcao(function hoisting) 
// falaOi()
function falaOi(){
    console.log('oie')
}
falaOi()

//First-class objects (Objetos de primeira Classe)
//function expression


const souUmDado = function (){
    console.log('sou um dado')
}
// souUmDado()

function executaFuncao(funcao){
    funcao();
}

executaFuncao(souUmDado)


//Arrow function
const functionArrow = () =>{
    console.log('sou uma arrow function')
}

functionArrow()
// setInterval(functionArrow, ()=>{

// }, 10000)

// Dentro de um Objeto 
const obj = {
    falar: function() {
        console.log('estou falando')
    }
}

obj.falar()