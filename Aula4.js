// Importando as informações
// import estudante from './estudante.json';
const estudante = require('./estudante.json');


//Leiturada do JSON
console.log(estudante);
console.log(typeof estudante);

const chaves = Object.keys(estudante);
console.log(chaves);

//Operações com JSON
const stringEstudante = JSON.stringify(estudante);
const objEstudante = JSON.parse(stringEstudante);