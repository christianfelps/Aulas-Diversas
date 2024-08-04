const inputTarefa = tag('.input__tarefa');
const btonTarefa = tag('.btn__tarefa');
const tarefas = tag('.tarefas');

function criaLi(){
    const li = document.createElement(`li`)
    return li
}


function criaTarefas(textoinput){
   const li = criaLi();
   li.innerText = textoinput;
   tarefas.appendChild(li)
   limpaImput()
   criaBotaoApagar(li)
   salvarTarefas()
}


function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar esta tarefa')
    li.appendChild(botaoApagar)
}


function limpaImput(){
    
inputTarefa.value = ``;
inputTarefa.focus();
}


inputTarefa.addEventListener('keypress', (e)=>{
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefas(inputTarefa.value)
           
        
    }
})

btonTarefa.addEventListener('click', ()=>{
    if(!inputTarefa.value) return;
criaTarefas(inputTarefa.value)
    inputTarefa.value = ``
})


document.addEventListener('click', (e)=>{
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const  listaTarefas = [];


    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', tarefasJSON)

}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas =  JSON.parse(tarefas)
    for(let tarefa of listaTarefas){
        criaTarefas(tarefa)
    }
}
addTarefasSalvas()









function tag(tag){
let ele = document.querySelector(tag);
if(!ele){
    return null
}
return ele
}
