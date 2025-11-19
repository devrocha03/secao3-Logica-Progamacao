const p = document.querySelector(".paragrafos");
const paragrafos = document.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const bgColorBody = estiloBody.backgroundColor;

for (let p of paragrafos) {
  p.style.backgroundColor = bgColorBody
  p.style.color = '#FFF'
  
}