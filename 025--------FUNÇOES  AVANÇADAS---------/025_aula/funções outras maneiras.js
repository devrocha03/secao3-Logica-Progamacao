// declaração de função (Function Hoisting)
// O engine do JS nao liga se ao declarar a função está antes ou depois (hoisting)
falaOi();
function falaOi() {
  console.log('Oie');
}


// First-Class Objetcs (Objeto de Primeira Classe)
// function expression

const souUmDado = function () {
  console.log('Sou um dado');
}
souUmDado();



// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
}
funcaoArrow();


// Dentro de um objeto
const obj = {
  falar: function () {
    console.log('Estou falando....');
  }
};
obj.falar();
