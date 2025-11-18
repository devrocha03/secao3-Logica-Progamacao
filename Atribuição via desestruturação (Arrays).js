/* let a = "A"; // B
let b = "B"; // C
let c = "C"; // A

// Do lado esquedo do igual é a desetruturação
// Atribuição via desestruturação

const letras = [a, b, c];
[a, b, c] = letras;

console.log(a, b, c);
 */

/* 
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(resto);
 */


//  Buscar no array valores alternados, colocando espaços vazios
/* const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete); */


// Uma lista dentro do array. Cada lista é um índice
//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros
console.log(lista2[1]);

