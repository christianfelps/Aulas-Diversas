const request = obj => {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener('load',()=>{
            if(xhr.status >= 200 && xhr.status < 300){
               resolve(xhr.responseText)
            }else{
                reject(xhr.statusText)
            }
        });
    
    })
};

document.addEventListener('click', e=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    console.log(tag)

    if(tag === 'a'){
        e.preventDefault()
        CarregaPagina(el)
    }
})
async function CarregaPagina(el){

    try {
   const href = el.getAttribute('href');
   const response = await request({
        method: 'GET',
        url: href,
    });
    
    carregaResultado(response)

    } catch (error) {
        console.log(error)
    }
  
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

