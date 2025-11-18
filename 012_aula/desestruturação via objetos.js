const pessoa = {
  nome: "joao",
  sobrenome: "Rocha",
  idade: 35,
  endereço: {
    rua: "Av. Barbosa",
    numero: 300
  }
};


/* const { nome = "", idade } = pessoa;
console.log(nome, idade);
 */

const {nome, ...resto} = pessoa
console.log(nome, resto);

