const express = require('express')
const path = require('path')

const app = express()



app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + "/html/index.html"))
});

app.get('/sobre', (req, res)=>{
    res.sendFile(path.join(__dirname + "/html/sobre.html"))
});
app.get('/blog', (req, res)=>{
    res.send('<h1>Bem vindo ao meu blog</h1>')
});

app.get('/ola/:nome/:cargo', (req, res)=>{
    
    res.send(`<h1 style="text-align: center;">ola ${req.params.nome} </h1> <br> <h2 style="text-align: center;">Seu cargo e: ${req.params.cargo} </h2>`);

})



app.listen(8081,()=>{
console.log('Servidor Rodando na url http://localhost:8081');
})