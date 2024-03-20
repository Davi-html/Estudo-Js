function tempoAleatorio(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
  return new Promise((resolve, reject) => {

    if (typeof msg !== 'string') {
      reject(new TypeError)
    }

    setTimeout(() => {
      resolve(msg)
    }, tempo)
  });
}

espera('frase1', tempoAleatorio(1, 3)).then(resposta => {
  console.log(resposta)
  return espera('222', tempoAleatorio(1, 3))
}).then(resposta => {
  console.log(resposta)
  return espera('frase3', tempoAleatorio(1, 3))
}).then(resposta => {
  console.log(resposta)
}).catch(erro => {
  console.log(erro)
})

