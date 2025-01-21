let listaAmigos = []
let lista = document.getElementById('listaAmigos')


function adicionarAmigo() {
  let nome = document.querySelector('input').value
  if (nome == '') {
    alert('Insira um nome!')
    return;
  }

  listaAmigos.push(nome)
  lista.innerHTML += `<li>${nome}</li>`

  document.querySelector('input').value = ''
}


function sortearAmigo() {
  if (listaAmigos.length > 0) {

    let numeroAleatorio = parseInt(Math.random() * listaAmigos.length)
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `${listaAmigos[numeroAleatorio]}`

    console.log(numeroAleatorio)

  } else alert('Insira um nome para sortear!')
}
