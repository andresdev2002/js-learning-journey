let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasPC = 3;

// Botones del juego
function seleccionarAtaque() {
  let botonPiedra = document.getElementById("piedra");
  botonPiedra.addEventListener('click', ataquePiedra);
  botonPiedra.style.display = 'none';

  let botonPapel = document.getElementById("papel");
  botonPapel.addEventListener('click', ataquePapel);
  botonPapel.style.display = 'none';

  let botonTijera = document.getElementById("tijera");
  botonTijera.addEventListener('click', ataqueTijera);
  botonTijera.style.display = 'none';

  let botonInicio = document.getElementById("iniciar");
  botonInicio.addEventListener('click', iniciarJuego);

  let botonReiniciar = document.getElementById("reiniciar-juego");
  botonReiniciar.addEventListener('click', reiniciarJuego);
  botonReiniciar.style.display = 'none';
}

function iniciarJuego() {
  let botonPiedra = document.getElementById("piedra");
  botonPiedra.style.display = 'block';

  let botonPapel = document.getElementById("papel");
  botonPapel.style.display = 'block';

  let botonTijera = document.getElementById("tijera");
  botonTijera.style.display = 'block';

  let botonInicio = document.getElementById("iniciar");
  botonInicio.style.display = 'none';
}

function reiniciarJuego() {
  vidasJugador = 3;
  vidasPC = 3;
  let spanVidasJugador = document.getElementById('vidas-jugador');
  let spanVidasEnemigo = document.getElementById('vidas-enemigo');
  spanVidasJugador.innerHTML = vidasJugador;
  spanVidasEnemigo.innerHTML = vidasPC;
  let sectionMensajes = document.getElementById('mensajes');
  sectionMensajes.innerHTML = '';
  let botonReiniciar = document.getElementById("reiniciar-juego");
  botonReiniciar.style.display = 'none';
  let botonInicio = document.getElementById("iniciar");
  botonInicio.style.display = 'block';

  // Reiniciar los eventos de click en los botones de ataque
  let botonPiedra = document.getElementById("piedra");
  botonPiedra.addEventListener('click', ataquePiedra);

  let botonPapel = document.getElementById("papel");
  botonPapel.addEventListener('click', ataquePapel);

  let botonTijera = document.getElementById("tijera");
  botonTijera.addEventListener('click', ataqueTijera);
}

// Ataques del juego
function ataquePiedra() {
  ataqueJugador = "Piedra";
  ataqueAleatorioEnemigo();
  combate();
}

function ataquePapel() {
  ataqueJugador = "Papel";
  ataqueAleatorioEnemigo();
  combate();
}

function ataqueTijera() {
  ataqueJugador = "Tijera";
  ataqueAleatorioEnemigo();
  combate();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio === 1) {
    ataqueEnemigo = 'Piedra';
  } else if (ataqueAleatorio === 2) {
    ataqueEnemigo = 'Papel';
  } else {
    ataqueEnemigo = 'Tijera';
  }
}

// Función que muestra el resultado del combate
function combate() {
  let spanVidasJugador = document.getElementById('vidas-jugador');
  let spanVidasEnemigo = document.getElementById('vidas-enemigo');

  if (ataqueJugador === ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador === "Piedra" && ataqueEnemigo === "Tijera") {
    crearMensaje("GANASTE");
    vidasPC--;
    spanVidasEnemigo.innerHTML = vidasPC;
  } else if (ataqueJugador === "Papel" && ataqueEnemigo === "Piedra") {
    crearMensaje("GANASTE");
    vidasPC--;
    spanVidasEnemigo.innerHTML = vidasPC;
  } else if (ataqueJugador === "Tijera" && ataqueEnemigo === "Papel") {
    crearMensaje("GANASTE");
    vidasPC--;
    spanVidasEnemigo.innerHTML = vidasPC;
  } else {
    crearMensaje("PERDISTE");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
}

function crearMensajeFinal(resultado) {
  let botonPiedra = document.getElementById("piedra");
  botonPiedra.removeEventListener('click', ataquePiedra);
  botonPiedra.style.display = 'none';

  let botonPapel = document.getElementById("papel");
  botonPapel.removeEventListener('click', ataquePapel);
  botonPapel.style.display = 'none';

  let botonTijera = document.getElementById("tijera");
  botonTijera.removeEventListener('click', ataqueTijera);
  botonTijera.style.display = 'none';

  let botonReiniciar = document.getElementById("reiniciar-juego");
  botonReiniciar.style.display = 'block';

  let sectionMensajes = document.getElementById('mensajes');
  let parrafo = document.createElement('p');
  parrafo.innerHTML = resultado;
  sectionMensajes.appendChild(parrafo);
}

function revisarVidas() {
  if (vidasPC == 0) {
    crearMensajeFinal("FELICITACIONES! Ganaste :)");
  } else if (vidasJugador == 0) {
    crearMensajeFinal('Lo siento, perdiste :(');
  }
}

// Función mensajes
function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById('mensajes');
  let parrafo = document.createElement('p');
  parrafo.innerHTML = 'Elegiste ' + ataqueJugador + ', la PC eligió ' + ataqueEnemigo + '- ' + resultado;
  sectionMensajes.appendChild(parrafo);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seleccionarAtaque(); // Llamada a la función seleccionarAtaque()