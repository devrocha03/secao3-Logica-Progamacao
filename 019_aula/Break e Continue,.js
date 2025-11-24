// Break e Continue --> Permite em ter controle de quando pular um elemento e quebrar um laço
// Continue --> Quando encontrar a palavra CONTINUE ele pula para a próxima iteração do laço
// Break --> Break sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    console.log('Pulei o numero 2');
    continue;
  }
  
  console.log(numero);

  if (numero === 7) {
    break;
  }
  
}
