// const multip = require('./mod');

// console.log(multip(2,3));

const path = require('path');
console.log(__filename);
console.log(__dirname);
console.log(path.resolve(__dirname, '..', '..'));

const cachorro = require('./B/C/D/mod');

const Dog = require('./z/mod2');

const doguinho = new cachorro('Raparigo');

const d1 = new Dog("Silva");

d1.latir();
doguinho.latir();