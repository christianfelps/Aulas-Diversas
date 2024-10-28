const mongoose = require('mongoose');
// configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/loja_db",{
}).then(()=>{
console.log('MongoDB Conectado...');

})
.catch(err => console.log("Houve um erro ao se conectar com o MongoDB ", err));

//Definindo a Model - Usuarios     
const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },

    sobrenome:{
        type: String,
        require: true
    },

    email:{
        type: String,
        require: true
    },

    idade:{
        type: Number,
        require: true
    },

    pais:{
        type: String,
    }
});
// Collection
//Criei o usuario na tabela User
const User = mongoose.model('Users', UserSchema);

new User ({
    nome: "Olavio  ",
    sobrenome: "Aloutovim",
    email: 'olouto@gmail.com',
    idade: 26,
    pais: "Irlanda"

// .save() para salvar  a tabela, .then se sucesso, e . cath se houver erro
}).save().then(()=>console.log('usuario criado com sucesso')).catch(e => console.log('Houve um erro', e))