const estudantes = require('./estudantes.json');

//Localizando informações
function buscaInformacao(lista, chave, valor){
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '7919437785');
console.log(telefoneEstudante);

//Encontrando objetos com propriedade especificada
function filtraPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep')
console.log(listaEnderecosIncompletos);

//Ordernar informações
function ordena(lista, propriedade){
    return lista.sort((a, b) =>{
        if(a[propriedade] < b[propriedade]) return -1;
        if(a[propriedade] > b[propriedade]) return 1;
        return 0;
    })
}

const listaOrdenada = ordena(estudantes, 'nome');
console.log(listaOrdenada);