const verdadeira = true;

// LET tem escopo de BLOCO {....}
// VAR só tem escopo de função

// let nome = "joao";
// var nome2 = "joao";

// if (verdadeira) {
//   let nome = "alexandre"
//   console.log(nome, nome2);

//   if (verdadeira) {
//     let nome = "rocha"
//     console.log(nome, nome2);
//   }
// }

function falaOi() {
  
  if (verdadeira) {
    let nome = 'João'
    var sobrenome = "Rocha"
  }
  console.log(sobrenome);
}

falaOi();