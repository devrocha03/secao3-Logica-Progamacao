
// For Clássico - Geralmente com iteráveis (array ou strings)
// For In - Retorna o índice ou chave (array, strings e objetos)
// For of - Retorna o Valor em si (iteráveis, arrays ou strings)


const nomes = ['João Rocha', 'Eliza', 'Daniel'];

for (let i = 0; i < nomes.length; i++){
  console.log(nomes[i]);
}

// Retornará o Índice ou chave e precisa do Array para retornar o valor
for (let i in nomes) {
  console.log(nomes[i]);
}

// Retornaná o Valor
for (let valor of nomes) {
  console.log(valor);
}

nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
  
})