// Hover sound effect
const hoverSound = document.getElementById("hover-sound");
const hoverElements = document.querySelectorAll(".logo-casa, .logo-raca, .logo-classe, .logo-mission");

hoverElements.forEach(element => {
  element.addEventListener("mouseover", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

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


