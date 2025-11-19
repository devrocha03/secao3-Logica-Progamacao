for (var i = 0; i <= 15; i++){
  console.log(i);
  }

// Checar par ou ímpar
for (var i = 0; i <= 10; i++){
  const par = i % 2 === 0;
  console.log(i, par);  
}

const frutas = ["Maça", "Pera", "Uva", "Joao", "Guegue", "Eliza", "Daniel"];
for (let i = 0; i < frutas.length; i++){
  console.log(`Índice ${i}`, frutas[i]);
  
}