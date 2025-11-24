// Escreva uma função que receve 2 numeros e retorne o maior deles


// Várias Formas de encurtar os códigos

// 1 -----------------------------------
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }

  
// 2.-----------------------------------
function max(x, y) {
  if (x > y) {
    return x;
  } return y;
}
  
  
// 3.----------------------------------- 
function max(x, y) {
  if (x > y) return x;
  return y;
}

  
// 4.-----------------------------------  
function max(x, y) {
  return x > y ? x : y;
}

  
// 5.-----------------------------------
const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 20));