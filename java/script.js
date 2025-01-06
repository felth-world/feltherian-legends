// Hover sound effect
const hoverSound = document.getElementById("hover-sound");
const hoverElements = document.querySelectorAll(".logo-casa, .logo-raca, .logo-classe, .logo-mission");

hoverElements.forEach(element => {
  element.addEventListener("mouseover", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

// Função para gerenciar música de fundo
function setupBackgroundMusic() {
  const audio = document.getElementById("audiobg");

  // Recuperar estado anterior da música
  const savedTime = localStorage.getItem("musicTime");
  const isPlaying = localStorage.getItem("musicPlaying") === "true";

  if (savedTime) {
    audio.currentTime = parseFloat(savedTime);
  }

  if (isPlaying) {
    audio.play();
  }

  // Salvar progresso da música
  audio.addEventListener("timeupdate", () => {
    localStorage.setItem("musicTime", audio.currentTime);
  });

  // Salvar estado de reprodução ao pausar/tocar
  audio.addEventListener("play", () => {
    localStorage.setItem("musicPlaying", "true");
  });

  audio.addEventListener("pause", () => {
    localStorage.setItem("musicPlaying", "false");
  });
}

// Executar função ao carregar a página
document.addEventListener("DOMContentLoaded", setupBackgroundMusic);

// Background music control
window.onload = function () {
  const audio = document.getElementById('audiobg');

  // Check if music has already started
  const musicPlayed = localStorage.getItem('musicPlayed');

  if (musicPlayed === 'true') {
    audio.play();
  }

  function playMusic() {
    if (!audio.paused) return; // Prevent replaying if already playing
    audio.play();
    localStorage.setItem('musicPlayed', 'true'); // Save state in localStorage
  }

  const menuItems = document.querySelectorAll('.menu a');

  menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
      playMusic();
    });
  });
};



