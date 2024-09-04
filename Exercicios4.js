/*1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON.
O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.
Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.
Imprima no console o conteúdo importado utilizando a função console.log().
Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.*/

const dados = require('./dados.json');

console.log("Conteúdo importado de dados.json:");
console.log(dados);
console.log("\nAcesso aos dados:");
console.log("Produtos:", dados.produtos);
console.log("Usuários:", dados.usuarios);

/*2 - Crie um arquivo chamado dados.json contendo informações em formato JSON.
O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.
Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele, utilize o método require para importar o conteúdo do arquivo dados.json.
Imprima no console o objeto JavaScript resultante da leitura do arquivo.*/

const dados = require('./dados.json');
console.log(dados);


/*3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:
    id (number): identificador do produto.
    nome (string): nome do produto.
    preco (number): preço do produto.
Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.*/

const produto = {
    id: 1,
    nome: "Fantasia",
    preco: 25.99
}

const stringJsonProduto = JSON.stringify(produto);
console.log("String do Produto:");
console.log(stringJsonProduto);

/*4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON.
O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.
Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:
a) Leia o conteúdo do arquivo animais.json.
b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
d) Modifique o habitat de um animal existente no array de animais.
e) Remova um animal do array de animais.
f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
g) Imprima no console o objeto JavaScript resultante das operações.*/

const objetoAnimais = require('./animais.json');
const copiaObjetoAnimais = JSON.parse(JSON.stringify(objetoAnimais));

const novoAnimal = {
    "id": 4,
    "nome": "Lobo",
    "tipo": "Mamífero",
    "habitat": "Floresta"
};
objetoAnimais.animais.push(novoAnimal);
const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Antártida";
}

const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objetoAnimais.animais.splice(indiceAnimalRemover, 1);
}

const novaStringJsonAnimais = JSON.stringify(objetoAnimais, null, 2);
console.log("Objeto JavaScript Resultante das Operações:");
console.log(objetoAnimais);

/*5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:
    id (number): identificador da pessoa.
    nome (string): nome da pessoa.
    idade (number): idade da pessoa.
Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.
Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.
Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.*/

const pessoaOriginal = {
    id: 1,
    nome: "Segio",
    idade: 30
}

function copiarObjetoJson(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

const pessoaModificada = copiarObjetoJson(pessoaOriginal);
pessoaModificada.idade = 31;
console.log("Objeto Original (Pessoa):");
console.log(pessoaOriginal);
console.log("Objeto Modificado (Pessoa):");
console.log(pessoaModificada)