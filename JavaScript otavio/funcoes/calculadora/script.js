function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        deleteOne(){
           this.display.value = this.display.value.slice(0, -1)
        },


        clearDisplay(){

            this.display.value = ``;

        },


        inicia(){
            this.cliqueBotoes();
            this.pressEnter();
        },

        pressEnter(){
            this.display.addEventListener('keyup', e=>{
                if(e.keyCode === 13){

                    this.realizaConta()

                }
            })
        },

        realizaConta(){
            let conta =  this.display.value;
            try{
                conta = eval(conta);
                if(!conta){
                    alert('conta invalida')
                    return;
                }
                this.display.value = String(conta)
            }catch(e){
                alert('conta invalida')
                return;
            }
        },

        cliqueBotoes(){
            //this = calculadora
            document.addEventListener('click', (e)=>{
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne()
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
                //bind(this) para usar o this da funcao principal
            })  //.bind(this)) arrow function usa o this da funcao raiz n precisa do bind
        },
        btnParaDisplay(valor){
            this.display.value += valor;
        }

        
    }

}
const calculadora = criaCalculadora()
calculadora.inicia()