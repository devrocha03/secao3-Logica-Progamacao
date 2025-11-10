/* 
---------------------------------------------------------------
&& -> false && true = false 
|| -> true || false = true -> retorna o valor verdadeiro
---------------------------------------------------------------
FALSY --> São valores que retornam falso. Qualquer coisa literalmente que não retornam esses valores abaixo, retornam em TRUE.

  false
  0
  '' "" ``
  null/undefined
  NaN
----------------------------------------------------------------
*/

console.log('Joao' && null && 'Maria'); // Retorna o valor FALSY

console.log(0 || false || null || 'João Rocha' || true);

const corUsuario = '';
const corPadrao = corUsuario || 'White';
console.log(corPadrao);
