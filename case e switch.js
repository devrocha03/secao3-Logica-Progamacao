function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;
  
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = '';
  }
}

// if (diaDaSemana === 0) {
//   diaSemanaTexto = "Domingo";
// } else if (diaDaSemana === 1) {
//   diaSemanaTexto = "Segunda";
// } else if (diaDaSemana === 2) {
//   diaSemanaTexto = "Terça";
// } else if (diaDaSemana === 3) {
//   diaSemanaTexto = "Quarta";
// } else if (diaDaSemana === 4) {
//   diaSemanaTexto = "Quinta";
// } else if (diaDaSemana === 5) {
//   diaSemanaTexto = "Sexta";
// } else if (diaDaSemana === 6) {
//   diaSemanaTexto = "Sábado";
// } else {
//   diaSemanaTexto = " ";
// }


const data = new Date("1990-09-30");
let diaDaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaDaSemana);



  console.log(diaDaSemana, diaSemanaTexto);