/* 
  Operadores Lógicos
    && -> AND -> E  --> Todas as expressões precisam ser verdadeiras para retornar true
    || -> OR -> OU --> Basta uma expressão ser true para retornar true
    ! -> NOT -> NÃO --> inverte a afirmação 
*/

const expressaoAnd = true && true && false && true;
const expressaoOr = true || false || false || false;
console.log(expressaoAnd);
console.log(expressaoOr);


const usuario = "Joao"
const senha = "1234"
const logar = usuario === "Joao" && senha === "1234";
console.log(logar);

