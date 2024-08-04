// try{
// //executada quando nao ha erros
// }catch(e){
// // e executada quando ha erros
// }finally{
// //sempre
// }

function mostraHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando uma instancia de Date')
    }
    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })
}try{
const data = new Date('01-01-1970 12:58:12')
const hora = mostraHora(11)
console.log(hora)
}catch(e){
    console.log('Nao e uma instancia correta de Date')
}finally{
    console.log('tenha um bom dia ')
}




