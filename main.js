const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

function moveButton() {
  const maxX = window.innerWidth - noBtn.clientWidth;
  const maxY = window.innerHeight - noBtn.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "From the moment our eyes met, my world transformed into a kaleidoscope of emotions, and your smile became the brightest star in my universe. In your presence, I find inspiration, joy, and a love that words fail to capture. You are the melody to my heart's song, the sunshine in my every day. I cherish every moment with you, for in each one, I discover a new depth to this beautiful feeling. In the grand tapestry of life, you are the thread that weaves through every chapter, making it infinitely more meaningful. I love you, Joylen Faye, with a love that grows stronger with every beat of my heart.";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  //This will hide the buttons that are inside a div, after you have the response
  //Esto oculta a los dos botones tomando el div que los contiene, después de responder la pregunta :3
  btnGroup.style.display = "none";
});

// Mouseover event in big screens
// Evento mouseover para pantallas grandes
noBtn.addEventListener("mouseover", moveButton);


// Touch events for small devices
// Eventos táctiles para dispositivos pequeños
noBtn.addEventListener("touchstart", (event) => {
  moveButton(); // Mover el botón al tocar la pantalla
  event.preventDefault(); // Evitar el comportamiento táctil predeterminado
});

// Evento de clic para pantallas pequeñas (opcional)
noBtn.addEventListener("click", () => {
  moveButton(); // Mover el botón al hacer clic (opcional)
});

// Deshabilitar el evento de mouseover en pantallas pequeñas
// Disable mouseover event in small screens
function handleScreenSizeChange() {
  if (window.innerWidth <= 768) {
    noBtn.removeEventListener("mouseover", moveButton);
  } else {
    noBtn.addEventListener("mouseover", moveButton);
  }
}

// Escuchar cambios en el tamaño de la ventana
// Listen the screen size change
window.addEventListener("resize", handleScreenSizeChange);

// Inicializar el manejo de eventos para el tamaño de pantalla actual
// Start to handle the events for the current screen size
handleScreenSizeChange();
