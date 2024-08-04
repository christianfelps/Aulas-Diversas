function relogio(){function getTimeFromSeconds(seg) {
    const data = new Date(seg * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

let seg = 0
let relogio = document.querySelector('#relogio')
let timer;
function StartTime() {
    timer = setInterval(function () {
        seg++
        relogio.innerHTML = getTimeFromSeconds(seg)
    }, 1000)
}


document.addEventListener('click', (e) => {
    const el = e.target
    if (el.classList.contains('iniciar')) {
        clearInterval(timer)
        StartTime()
        relogio.style.color = 'black'
    }
    if (el.classList.contains('pausar')) {
        clearInterval(timer)
        relogio.style.color = 'red'
        }
    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        seg = 0;
        relogio.style.color = 'black'
        }
})






}
relogio();
