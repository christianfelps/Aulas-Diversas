class CPF {
    constructor(cpf){
        this.cpf = cpf;
        this.cpfLimpo = this.cpf.replace(/\D+/g, '');
    }

    get verCpf(){
        return this.cpfLimpo
    } 

    set mudarCpf(valor){
        if(typeof valor !== 'string') return

        this.cpf = valor;
        this.cpfLimpo = this.cpf.replace(/\D+/g, '');

    }

    validaCPF () {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false
    if(this.isSequencia())  return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;

}

    criaDigito (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    let total = cpfArray.reduce((ac, val) => {
        ac += (regressivo* Number(val))
        regressivo--;
        return ac;
    },0)
   let digito = 11 -(total % 11)
   return digito > 9 ? '0' : String(digito)
};

    isSequencia () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}
}
const cpf = new CPF('50219327807')
console.log(cpf.validaCPF())
cpf.mudarCpf = '19327824511'
console.log(cpf.validaCPF())


 console.log(cpf.cpf, cpf.cpfLimpo, cpf.verCpf)