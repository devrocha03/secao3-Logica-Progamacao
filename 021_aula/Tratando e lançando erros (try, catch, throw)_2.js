/* try {
  console.log(a);
  console.log("Abrir um arquivo");
  console.log("Manipulei o arquivo");
  console.log("Fechei o arquivo");
} catch (e) {
  console.log("Tratando o Erro");
} finally {
  console.log("FINALLY: Eu sempre sou executado");
}
 */

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instancia de Date");
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:30");
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
} finally {
  console.log("Tenha um bom dia!");
}
