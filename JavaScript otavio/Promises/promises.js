function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(false);
        setTimeout(() => {
            resolve(msg)

        }, tempo)


    })

}

// esperaAi('frase', rand(1, 3))
//     .then(res => {
//         console.log(res);
//     })
//     .catch();
//Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
//     esperaAi(1000, 1000)

// ];
// executa todas as promises
// Promise.all(promises).then((valor) => { console.log(valor) }).catch((erro) => {
//     console.log(erro)
// });

// faz uma corrida e a primeira promise que ganhar sera executada
// Promise.race(promises).then((valor) => { console.log(valor) }).catch((erro) => {
//     console.log(erro)
// });




// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase 2', rand())
//             .then(fase => {
//                 console.log(fase)
//                 return esperaAi('Fase 3', rand())
//                     .then(fase => {
//                         console.log(fase)
//                         return esperaAi('fase 3', rand())
//                     }).then(fase =>{
//                         console.log(fase)
//                     })
//             })

//     }).catch(e=>console.log(e));

async function executa(){
    try{
   const fase1 = await esperaAi('Fase 1', rand());
   console.log(fase1);
   const fase2 = await esperaAi(2, rand());
   console.log(fase2);
   const fase3 = await esperaAi('Fase 3', rand());
   console.log(fase3);
}catch(e){
    console.log(e)
}
}
executa()