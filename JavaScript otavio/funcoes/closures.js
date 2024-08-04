function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}
const funcao = retornaFuncao('Christian');
console.dir(funcao)