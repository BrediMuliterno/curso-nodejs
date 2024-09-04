//1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:
//    titulo (string): título do livro.
//    autor (string): nome do autor do livro.
//    anoPublicacao (number): ano de publicação do livro.
//    genero (string): gênero do livro.
//No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.

const livro = {
    titulo: "Descubra",
    autor: "Eu",
    anoPublicacao: 1994,
    genero: "Fantasia"
};

console.log(`Detalhes do Livro:
    Título: ${livro.titulo}
    Autor: ${livro.autor}
    Ano de Publicação: ${livro.anoPublicacao}
    Gênero: ${livro.genero}`)

//2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: 
//  título, autor, ano de publicação e gênero.
//Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
//Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
//Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

const anoAtual = new Date().getFullYear();
livro.idadePublicacao = anoAtual - livro.anoDePublicacao;
livro.mostrarDetalhes = "Detalhes do Livro:\n" +
                        "Título: " + livro.titulo + "\n" +
                        "Autor: " + livro.autor + "\n" +
                        "Ano de Publicação: " + livro.anoDePublicacao + "\n" +
                        "Gênero: " + livro.genero + "\n" +
                        "Idade de Publicação: " + livro.idadePublicacao + " anos";

console.log(livro.mostrarDetalhes);

//3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
//Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.

const livro2 = {
    titulo: "Descoberto",
    autor: "Eu",
    anoPublicacao: 1995,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1995,
};

console.log("Detalhes do Livro:");
console.log("Título: " + livro2['titulo']);
console.log("Autor: " + livro2['autor']);
console.log("Ano de Publicação: " + livro2['anoPublicacao']);
console.log("Gênero: " + livro2['genero']);
console.log("Idade de Publicação: " + livro2['idadePublicacao'] + " anos");

//4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
//Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
//No final do arquivo livro.js, adicione uma avaliação ao objeto.
//Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
//Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

const livro3 = {
    titulo: "Redescoberta",
    autor: "Eu",
    anoPublicacao: 1996,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1996,
    avaliacao: null, 
};

const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
if (livro3.avaliacao === null) {
    livro3.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro já possui uma avaliação.");
}

console.log("Detalhes do Livro:");
console.log("Título: " + livro3.titulo);
console.log("Autor: " + livro3.autor);
console.log("Ano de Publicação: " + livro3.anoPublicacao);
console.log("Gênero: " + livro3.genero);
console.log("Idade de Publicação: " + livro3.idadePublicacao + " anos");
console.log("Avaliação: " + (livro3.avaliacao === null ? "Nenhuma avaliação disponível." : "Nota: " + livro3.avaliacao.nota + ", Comentário: \"" + livro3.avaliacao.comentario + "\""));

//5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
//Depois altere o gênero do livro para "Aventura".

livro3.genero = "Aventura";
livro3.avaliacao = null;
console.log(`Detalhes do Livro:
    Título: ${livro3.titulo}
    Autor: ${livro3.autor}
    Ano de Publicação: ${livro3.anoPublicacao}
    Gênero: ${livro3.genero}
    Idade de Publicação: ${livro3.idadePublicacao} anos
    Avaliação: ${livro3.avaliacao === null ? "Nenhuma avaliação disponível." : `Nota: ${livro3.avaliacao.nota}, Comentário: "${livro3.avaliacao.comentario}"`}`)

//6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação.
//Em seguida, exclua a propriedade avaliacao do objeto livro.
//Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

const livro4 = {
    titulo: "Perdido",
    autor: "Eu",
    anoPublicacao: 1997,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1997,
    avaliacao: { nota: 4.5, comentario: "Ótima leitura!" }
};

delete livro4.avaliacao;
console.log(`Detalhes do Livro:
    Título: ${livro4.titulo}
    Autor: ${livro4.autor}
    Ano de Publicação: ${livro4.anoPublicacao}
    Gênero: ${livro4.genero}
    Idade de Publicação: ${livro4.idadePublicacao} anos
    Avaliação: Nenhuma avaliação disponível.`)
