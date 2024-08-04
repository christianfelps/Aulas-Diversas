function ValidaCpf(cpfEnviado) {
    let cpf = cpfEnviado
    Object.defineProperty(this, 'cpf',{
        enumerable: true,
        configurable: true,
        get: function(){
            return cpf 
        },
        set: function(newCpf){
            if(typeof newCpf !==  'string') return
            return cpf = newCpf
        }
    })

}
ValidaCpf.prototype.valida = function () {
    let cpfLimpo = this.cpf.replace(/\D+/g, '')
    let cpfArray = Array.from(cpfLimpo)
    cpfArray.splice(9, 2)
    const primeiroDigito = this.calcularDigito(cpfArray, 10)
    cpfArray.push(primeiroDigito)

    const segundoDigito = this.calcularDigito(cpfArray, 11)
    cpfArray.push(segundoDigito)

    if (cpfLimpo.endsWith(`${primeiroDigito}${segundoDigito}`)) {
        console.log('CPF Valido')

    } else {
        console.log('CPF invalido')
    }


}
ValidaCpf.prototype.calcularDigito = function (cpf, iterador) {
    let i = iterador
    let cpfAcumulado = cpf.reduce((acc, e) => {
        acc += Number(e) * i
        // console.log(acc, i)
        i--;
        return acc

    }, 0);
    let digito = 11 - (cpfAcumulado % 11)
    return digito >= 10 ? 0 : digito
}




const cpf = new ValidaCpf('623.378.570-77');
cpf.valida()
const cpf2 = new ValidaCpf('623.378.570-67')
cpf2.valida()
