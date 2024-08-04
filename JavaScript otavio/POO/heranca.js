class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado) {
            console.log(`${this.nome } esta ligado` )
            return
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado ) {
            console.log(`${this.nome } esta desligado` )
            return
        }
        this.ligado = false;
    }

}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
        }
        ligar(){
            console.log('metodo alterrado')
        }
    
}
const s1 = new Smartphone('IPhone', 'Preto', 'SE')
s1.ligar()
console.log(s1)