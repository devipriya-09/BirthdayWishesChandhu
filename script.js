const envelope = document.getElementById('envelope');
const message = document.getElementById('message');
const music = document.getElementById('bg-music');
const sparklesContainer = document.querySelector('.sparkles');

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

// Create sparkles
function createSparkles(num = 30) {
  for (let i = 0; i < num; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.animationDelay = (Math.random() * 2) + 's';
    sparklesContainer.appendChild(sparkle);
  }
}

// Click to open envelope
envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  typeWriter(birthdayText, message, 40);
  music.play().catch(() => {});
  createSparkles();
});
