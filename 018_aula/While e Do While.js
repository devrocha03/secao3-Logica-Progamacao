 function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}


const min = 1;
const max = 10;
let rand = 10;


// While --> Primeiro ele checa a condição e depois ele executa o código
while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}


// Do While --> Primeiro ele Executa o Código e depois ele checa a Condição
do {
  rand = random(min, max);
  console.log(rand);
}  while (rand !== 10); 



/* const nome = "joão"
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
  
} */

// Esse tipo de laço de repetição não é muito recomendado, melhor usar o For
/* 
while (i < nome.length) {
  console.log(nome[i]);
  i++
}
 */
