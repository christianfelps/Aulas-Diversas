fetch('pagina1.html')
.then(resp =>{
    if(resp.status !== 200) throw new Error('Erro 404 Nosso')
        return resp.text();
})
.then(html => console.log(html))
.catch(e=> console.error(e))


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
    const response =  await fetch(href);

    if(response.status !== 200) throw new Error('Erro 404');

    const html = await response.text()
    carregaResultado(html)


} catch (error) {
    console.error(error)
}
    
  
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

