//Diferença de array e objeto

const listaCPFs = [1111111, 22222, 3333];

const objetoPessoa = {
  idade: 32,
  nome: "Jose",
};

//Acessando objeto

const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };
  
  console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos.`);
  console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

//Acessando propridades com colchetes

const cliente2 = {
    nome: "Andre",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
  };
  
  console.log(`O nome do cliente é ${cliente2["nome"]} e essa pessoa tem ${cliente2["idade"]} anos.`);
  
  const chaves = ["nome", "idade", "cpf", "email", "altura"];
  
  chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente2[chave]}`);
  });
  
//Criando novas propriedades ou alterando valores

const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };
  
  console.log(pessoa.nome);
  
  console.log(pessoa.telefone);
  
  pessoa.telefone = "11 2223333444";
  
  console.log(pessoa.telefone);
  
  pessoa.nome = "Luma Silva";
  
  console.log(pessoa);
  
  const novaPessoa = {
    nome: "Pedro",
  };
  
  pessoa = novaPessoa;
  