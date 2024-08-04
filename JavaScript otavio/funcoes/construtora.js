function Calculadora(){
   
        this.display = document.querySelector('.display'),
        this.btnClear = document.querySelector('.btn-clear'),

        this.deleteOne = () => this.display.value = this.display.value.slice(0, -1)


        this.clearDisplay = () => this.display.value = ``;;


        this.inicia = () =>{
            this.cliqueBotoes();
            this.pressEnter();
        };

        this.pressEnter = () => {
            this.display.addEventListener('keyup', e=>{
                if(e.keyCode === 13){

                    this.realizaConta()

                }
            })
        };

        this.realizaConta = () => {
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
        };

        this.cliqueBotoes = () => {
            //this = calculadora
            document.addEventListener('click', (e)=>{
                const el = e.target
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear'))
                    this.clearDisplay()

                if(el.classList.contains('btn-del'))
                    this.deleteOne()
                
                if(el.classList.contains('btn-eq'))
                    this.realizaConta()
                
                //bind(this) para usar o this da funcao principal
            })  //.bind(this)) arrow function usa o this da funcao raiz n precisa do bind
        };
        this.btnParaDisplay = (valor) => {
            this.display.value += valor;
            this.display.focus()

        }

        

}
const calculadora = new Calculadora()
calculadora.inicia()