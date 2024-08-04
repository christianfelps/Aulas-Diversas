let numerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

mensagemInicial();


function verificarChute() {
    let chute = parseInt(document.querySelector("input").value);
    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas ' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa} `;
        exibirTextoNaTela('p', mensagemTentativas);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela('h1', 'Maior!');
        exibirTextoNaTela('p', 'O numero e menor que o numero secreto!');
        limparCampo();
        tentativa++;
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('h1', 'Menor!');
        exibirTextoNaTela('p', 'O numero e maior que o numero secreto!');
        limparCampo();
        tentativa++;
    }
   
}


function limparCampo() {
    let campo = document.querySelector("input");
    campo.value = '';
    
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
document.querySelector("#reiniciar").setAttribute('disabled', true);
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}


function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
 }
    


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    if(numerosSorteados.length === numeroLimite){
        numerosSorteados = []
    }
    //.includes() verifica se contem o valor na variavel ou array 
    if(numerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }

}

