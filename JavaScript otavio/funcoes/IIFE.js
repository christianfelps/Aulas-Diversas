//IIFE -> Immediately invoked funtion expression
(function () {
    const sobrenome = 'alvim';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('luiz'))
    }

        falaNome()
})()

const nome = 'qualquer'