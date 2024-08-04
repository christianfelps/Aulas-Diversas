class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0
    }

    aumentarVolume(){
        this.volume += 2 
    }

    diminuirVolume(){
        this.volume -= 2 
    }
// metodo de instancia
    static trocaPilha(){
        console.log('irei trocar')
    }
}


const contr1 = new ControleRemoto('LG')
contr1.aumentarVolume()
console.log(contr1)

contr1.aumentarVolume()
console.log(contr1)

contr1.diminuirVolume()
console.log(contr1)