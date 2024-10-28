const express = require('express');
const app = express();


    // Funcao usada para tratar parametros recebidos do body
app.use(express.urlencoded({extended: true}));



app.get('/', (req, res)=>{
res.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`);
});

app.get('/testes/:idUsuarios?', (req, res)=>{
    console.log(req.params);
    res.send(req.params);
})

app.post('/',(req, res)=>{
    console.log(req.body);
    res.send(`O que voce me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => console.log('Servidor rodando no http://localhost:3000'));