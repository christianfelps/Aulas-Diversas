//superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo  ){
      console.log(`Saldo insuficiente ${this.saldo}`);
      return
    }
     this.saldo -= valor
     this.verSaldo()
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/C: ${this.agencia}/ ${this.conta}`)
    console.log(`Saldo R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

//linkando o prototype da contaCorrente com a conta
ContaCorrente.prototype = Object.create(Conta.prototype)
//definindo o o constructor da contaCorrente como dela 
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){
    if(valor > this.saldo + this.limite){
      console.log(`Saldo insuficiente ${this.saldo}`);
      return
    }
     this.saldo -= valor
     this.verSaldo()
}

function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}
CP.prototype = Object.create(Conta.prototype)
CP.prototype.constructor = CP


const cc = new ContaCorrente(111, 22, 0, 100)
cc.sacar(100)

const cp = new CP(222, 0, 15)
cp.depositar(30)
cp.sacar(60)