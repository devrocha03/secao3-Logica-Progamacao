const p = document.querySelector(".paragrafos");
const paragrafos = document.querySelectorAll('p');

const container = document.querySelector(".container")
const h1 = document.querySelectorAll('h1');
const h2 = document.querySelectorAll('h2');

const estiloBody = getComputedStyle(document.body);
const bgColorBody = estiloBody.backgroundColor;


for (let p of paragrafos) {
  p.style.backgroundColor = bgColorBody
  p.style.color = '#FFF'
  p.style.fontFamily = "georgia"
  p.style.fontSize = '18px'
  
}

for (let container of h1) {
  container.style.color = "#c50303ff"
  container.style.fontFamily = "verdana"
}

for (let container of h2) {
  container.style.color = "#3e2b85ff"
  container.style.fontFamily = "arial"
}