// For In -> lê os índices ou chaves do objeto

const pessoa = {
  nome: 'joao',
  idade: 20,
  altura: 1.80
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
  
}

/* for (let i in frutas) {
  console.log(frutas[i]);
} */