//factory function (Funcao fabrica)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },
        fala(assunto) {
            return `${nome} esta ${assunto}.`
        },
        altura: a,
        peso: p,

        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }


    }
}

const p1 = criaPessoa('christian', 'alvim', 1.80, 89)
const p3 = criaPessoa('Olivia', 'alvim', 1.58, 55)
console.log(p1.imc)
p3.nomeCompleto = 'Silvio santos de oliveira'
console.log(p1.fala('Falando sobre eu'))

