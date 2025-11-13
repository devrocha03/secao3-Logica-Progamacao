const form = document.querySelector("#formulario"); // CAPTURA DO FORMULÁRIO DO FORM NO HTML

form.addEventListener("submit", function (e) { 
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso Inválido', false);
    return;
  }
  if (!altura) {
    setResultado('Altura Inválida', false);
    return;
  }
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);
   
});

function getImc(peso, altura) {
  const imc = peso / (altura * altura)
  return imc.toFixed(2);
}

function getNivelImc(imc) {
  const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

  if (imc >= 39.9) {
    return nivel[5];
  }
  if (imc >= 34.9) {
    return nivel[4];
  }
  if (imc >= 29.9) {
    return nivel[3];
  }
  if (imc >= 24.9) {
    return nivel[2];
  }
  if (imc >= 18.5) {
    return nivel[1];
  }
  if (imc < 18) {
    return nivel[0];
  }
}


function criaP() {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
    
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}


































/* function calcularIMC() {
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

calcularIMC(); */
