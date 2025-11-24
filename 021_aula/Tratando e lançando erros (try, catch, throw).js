function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number")
    throw new Error("X e Y precisam ser Números"); // Criando um novo erro

  return x + y;
}

// Se ocorrer qualquer erro dentro do bloco try, catch será executado e se não houver erro o bloco try será executado
try {
  console.log(soma(1, 2));
  console.log(soma("1", 2));
} catch (err) {
  console.log("Mensagem para o usuário final");
}


// Nunca exibir o erro para o usuário final
// Deixar uma mensagem para ele