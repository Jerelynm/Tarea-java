window.onload = function () {
  alert("Estas ingresando a la aplicación");
  actualizarHora();
  setInterval(actualizarHora, 1000);
};

// Cambiar color botón
function cambiarColorBoton() {
  const botones = document.querySelectorAll("button");
  botones.forEach((btn) => {
    btn.style.background =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
}

// Tema claro/oscuro
function toggleTema() {
  document.body.classList.toggle("claro");
}

// Cambiar título
function cambiarTitulo() {
  document.getElementById("titulo").textContent =
    "🎉 ¡Título cambiado dinámicamente! 🎉";
}

// Reiniciar página
function reiniciarPagina() {
  location.reload();
}

// Cambiar fuente
function cambiarFuente() {
  document.body.style.fontFamily = "Comic Sans MS, cursive";
}

// Reiniciar fuente
function reiniciarFuente() {
  document.body.style.fontFamily = "Arial, sans-serif";
}

// Alertas random
function alertaRandom() {
  const mensajes = [
    "¡Hola 👋!",
    "¿Ya tomaste agua hoy? 💧",
    "Sigue adelante 🚀",
    "Sonríe, que la vida es corta 😄",
  ];
  alert(mensajes[Math.floor(Math.random() * mensajes.length)]);
}

// Contador
let contador = 0;
function incrementarContador() {
  contador++;
  document.getElementById("contador").textContent = contador;
}

// Mostrar/ocultar paisajes
function mostrarPaisaje() {
  const paisajes = [
    "https://picsum.photos/seed/paisaje1/600/300",
    "https://picsum.photos/seed/paisaje2/600/300",
    "https://picsum.photos/seed/paisaje3/600/300",
  ];
  document.getElementById("imagenPaisaje").src =
    paisajes[Math.floor(Math.random() * paisajes.length)];
}

function ocultarPaisaje() {
  document.getElementById("imagenPaisaje").src = "";
}

// Hora comparada
function actualizarHora() {
  const ahora = new Date();
  document.getElementById("horaLocal").textContent =
    "Hora local: " + ahora.toLocaleTimeString();

  const opciones = { timeZone: "America/Los_Angeles" };
  const horaLA = ahora.toLocaleTimeString("es-ES", opciones);
  document.getElementById("horaLA").textContent =
    "Hora en Los Ángeles: " + horaLA;

  const diferencia = ahora.getHours() - ahora.toLocaleString("en-US", opciones).split(":")[0];
  document.getElementById("diferencia").textContent =
    "Diferencia horaria aprox: " + diferencia + " horas";
}

// GIF
function mostrarGif() {
  document.getElementById("contenedorGif").innerHTML =
    '<img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="GIF divertido">';
}

function eliminarGif() {
  document.getElementById("contenedorGif").innerHTML = "";
}

// Lugar recomendado
function mostrarLugar() {
  const lugares = ["Japón 🗻", "Italia 🍕", "Guatemala 🌋", "Hawái 🏝️"];
  document.getElementById("lugarTexto").textContent =
    "Te recomiendo visitar: " +
    lugares[Math.floor(Math.random() * lugares.length)];
}


