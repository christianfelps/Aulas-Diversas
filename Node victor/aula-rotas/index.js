const express = require('express')
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')


// Config   
//Template Engine
const hbs = handlebars.create({
    extname: '.handlebars',
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// ROTAS
app.get('/', (req, res) => {
    Post.findAll({ order: [['id', 'DESC']] }).then((posts) => {
        res.render('home', { posts: posts })
    })

})

app.get('/cad', (req, res) => {
    res.render('form')
});

app.post('/add', (req, res) => {

    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    })
        .catch(erro => res.send('Houve u erro:' + erro))

});

app.get('/deletar/:id', (req, res) => {
    Post.destroy({
        where: {
            'id': req.params.id
        }
    }).then(() => {

        res.send('postage deletada com sucesso')
    }).catch(() => {
        res.send(' Essa Postagem nao existe')
    })
})




app.listen(8081, () => {
    console.log('Servidor Rodando na url http://localhost:8081');
});