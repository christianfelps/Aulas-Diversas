


function calcularImc(alt, peso){
     let imc = peso/(alt * alt)  ;
     return imc
}
function Imc (imc){
    
      if (imc < 18.5){
        console.log("Abaixo do peso")
        }
    else if (imc >= 18.5 && imc < 25){
        console.log("Peso normal")
        
    }else if (imc >= 25 && imc < 30){
        console.log("Excesso de peso")
        
    }else if (imc > 30 && imc < 35 ){
        console.log("Obesidade!")
        
    }else if (imc > 35 ){
        console.log("Obesidade Extrema!")
        ;
    }
}


let meuImc = calcularImc(1.70, 60)
 Imc(meuImc)
