function pcGamer() {
    const readlineSync = require('readline-sync');

    function Computador(monitor, kit) {
        this.monitor = monitor;
        this.kit = kit
    }
    let pcs = []
    let continuar = `sim`
    let i = 0
    let monitor;
    let kit;
    let opcao
    while (opcao !== 5) {
        console.log(`----- Ola o que deseja? -----`)
        console.log(`----- [1] Adicionar PC? -----`)
        console.log(`----- [2] Apagar Pc? -----`)
        console.log(`----- [3] Listar Pcs? -----`)
        console.log(`----- [4] Editar Pc? -----`)
        console.log(`----- [5] Sair? -----`)
        opcao = readlineSync.questionInt()
        switch (opcao) {
            case 1:
                while (continuar !== 'n') {
                    monitor = readlineSync.question('Qual o monitor? ')
                    kit = readlineSync.question('Qual o kit? ')
                    pcs[i] = new Computador(monitor, kit);

                    continuar = readlineSync.question('deseja continuar? [S/N] ').toLowerCase()
                    i++
                }
                pcs.forEach((v, i) => {
                    console.log(i, v)
                })
                break;
            case 2:
                while (pcs.length !== pcs.lenght - 1) {
                    console.log('Para ver o elemento do item que deseja apagar volte ao menu e selecione listar todos.')
                    i = readlineSync.questionInt('Qual elemento deseja apagar')
                    if (i >= 0 && i < pcs.length) {
                        pcs.splice(i, 1);
                    } else {
                        console.log('Digite um indice valido')
                    }

                    pcs.forEach((v, i) => {
                        console.log(i, v)
                    })
                    break;
                    }
                case 3:
                        pcs.forEach((v, i)=>{
                            console.log(i, v )
                        })
                        break;
        }
    }
}
pcGamer()