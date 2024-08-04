const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_node','postgres','root',{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(()=>{
    console.log('Conectado com sucesso!');
}).catch((e)=>{
    console.log('nao conectado ' + e);
});


const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING // tem um limite de caracteres
    },

    conteudo: {
        type: Sequelize.TEXT
    }

})

// Postagem.create({
//     titulo: 'Qualuqe 2',
//     conteudo: 'olasjdajsidaksdniw 2'
// })

const Usuario = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },

    senha:{
        type: Sequelize.STRING
    }



})


Usuario.create({
    nome: 'Christian',
    sobrenome: 'Alvim ',
    idade: 23,
    email:'christian@qualquer',
    senha: 123456,
})


// Postagem.sync({force: true})
