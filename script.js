document.addEventListener("DOMContentLoaded", function () {
  const timePassedElement = document.getElementById("timePassed");

  // Data di inizio (20 luglio 2024)
  const startDate = new Date("July 7, 2024 00:00:00").getTime();

  // Funzione per calcolare e visualizzare il tempo passato
  function updateTimePassed() {
    const now = new Date().getTime();
    const timeDiff = now - startDate;

    // Calcolare giorni, ore, minuti e secondi
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Visualizzare il tempo passato
    timePassedElement.innerHTML = `${days} giorni, ${hours} ore, ${minutes} minuti e ${seconds} secondi`;

    // Continuare ad aggiornare ogni secondo
    setTimeout(updateTimePassed, 1000);
  }

  // Avviare il timer
  updateTimePassed();
});

// Funzione per mostrare la lettera
function showMessage() {
  document.getElementById("hidden-message").classList.toggle("hidden");
}

// Funzione per mostrare/nascondere la galleria di foto
function toggleGallery() {
  document.getElementById("photo-gallery").classList.toggle("hidden");
}

// Funzione per mostrare/nascondere la playlist
function togglePlaylist() {
  document.getElementById("playlist-container").classList.toggle("hidden");
}
const text = "Sei la cosa più bella che mi sia mai successa. Ti amo. ❤️";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

document.getElementById("yes-btn").addEventListener("click", function () {
  window.location.href = "pagina_principale.html"; // Qui metti il link alla tua pagina vera
});

document.getElementById("no-btn").addEventListener("mouseover", function () {
  const x = Math.random() * window.innerWidth - 100;
  const y = Math.random() * window.innerHeight - 50;
  this.style.left = `${x}px`;
  this.style.top = `${y}px`;
});
