const Sequelize = require('sequelize');

// conexao com o banco de dados Postgres
const sequelize = new Sequelize('db_node','postgres','root',{
    host: 'localhost',
    dialect: 'postgres'
});


module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

// module.exports = {
//     Sequelize: Sequelize,
//     sequelize: sequelize
// }
