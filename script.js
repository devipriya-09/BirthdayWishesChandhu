const btn = document.getElementById('view-btn');
const message = document.getElementById('message');
const music = document.getElementById('bg-music');
const confettiContainer = document.querySelector('.confetti');

const birthdayText = `Happy Birthday, Chandhu!\nWishing you a wonderful year ahead.\nSoon-to-be Super Dad — tiny footsteps are on the way ✨`;

// Typewriter effect
function typeWriter(text, element, speed = 40) {
  let i = 0;
  element.innerHTML = '';
  element.style.opacity = 1;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Create confetti
function createConfetti(num = 50) {
  for (let i = 0; i < num; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * window.innerWidth + 'px';
    piece.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    piece.style.animationDuration = 2 + Math.random() * 3 + 's';
    piece.style.width = 5 + Math.random() * 8 + 'px';
    piece.style.height = 5 + Math.random() * 8 + 'px';
    confettiContainer.appendChild(piece);
  }
}

// Button click event
btn.addEventListener('click', () => {
  btn.style.display = 'none';
  typeWriter(birthdayText, message, 40);
  createConfetti();
  music.play().catch(() => {});
});
