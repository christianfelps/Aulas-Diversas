function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar()  {
            console.log(`${this.nome} Esta falando`)
        },
        comer()  {
            console.log(`${this.nome} Esta comendo`)
        },
        beber()  {
            console.log(`${this.nome} Esta bebendo`)
        }
    }
return Object.create(pessoaPrototype,{
    nome:{value: nome},
    sobrenome:{value: sobrenome}
})

}

const p1 = criaPessoa('Chris', 'Tian')