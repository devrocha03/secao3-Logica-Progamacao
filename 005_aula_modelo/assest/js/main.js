function calcularIMC() {
  const form = document.querySelector(".form");

  function recebeEventoForm(evento) {
    evento.preventDefault();
    mostrarIMC();
  }

  function mostrarIMC() {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const botao = document.querySelector(".resultado");

    const imc = peso / (altura * altura);

    if (imc <= 18) {
      botao.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Abaixo do Peso)`;
    } else if (imc >= 25 && imc <= 29.9) {
      botao.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Peso Normal)`;
    } else if (imc >= 25 && imc <= 29.9) {
      botao.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Sobrepeso) `;
    } else if (imc >= 30 && imc <= 34.9) {
      botao.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade Grau 1) `;
    } else if (imc >= 35 && imc <= 39.9) {
      botao.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade Grau 2) `;
    } else if (imc >= 40) {
      botao.innerHTML = `Seu IMC é de ${imc.toFixed(2)} (Obesidade Grau 3) `;
      return;
    }
  }

  form.addEventListener("submit", recebeEventoForm);
}

calcularIMC();