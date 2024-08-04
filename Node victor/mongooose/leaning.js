const mongoose = require('mongoose');
const { NUMBER } = require('sequelize');

// configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/loja_db",{
    useMongoClient: true
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
mongoose.model('Users', UserSchema);

new UserSchema ({
    nome: "Christian",
    sobrenome: "Alvim",
    email: 'asdasdas@gmail.com',
    idade: 23,
    pais: "Brasil"
}).save().then(()=>console.log('usuario criado com sucesso')).catch(e => console.log('Houve um erro', e))