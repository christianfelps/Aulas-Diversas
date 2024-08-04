function mostraHora(){
let data = new Date(`2024-01-10 `)

    return data.toLocaleTimeString('pt-BR')
}
// chama a funcao em um intervalo de tempo que eu passo
const timer = setInterval(()=>{
    console.log(mostraHora())
}, 1000)


//para encerrar a funcao setInterval
// setTimeout(()=>{
//     clearInterval(timer)
// }, 6000)

// setTimeout(()=>{
//     console.log("Ola mundo")
// }, 8000)