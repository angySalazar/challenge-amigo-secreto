let amigos = [];

function agregarAmigo() {
  // Capturar el valor del campo de entrada
  let nombreAmigo = document.getElementById("amigo").value;
  
  // Validar la entrada
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  
  // Actualizar el array de amigos
  amigos.push(nombreAmigo);
  
  actualizarListaAmigos(amigos);
  
  // Limpiar el campo de entrada
  document.getElementById("amigo").value = "";
}

function actualizarListaAmigos(amigos) {
  // Obtener el elemento de la lista
  const lista = document.getElementById('listaAmigos');
  
  lista.innerHTML = "";
  
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }
  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
  const amigoSorteado = amigos[indiceAleatorio];
  
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

function reiniciar(){
  //Eliminamos todos los elementos del arreglo
  listaAmigos = [];
  
  //Eliminamos todos los nombres de los amigos
  let ul = document.getElementById("listaAmigos");
  while(ul.firstChild){
      ul.removeChild(ul.firstChild);
  }

  //Eliminar el nombre sorteado
  let ul2 = document.getElementById('resultado');
  ul2.removeChild(ul2.firstChild);

}