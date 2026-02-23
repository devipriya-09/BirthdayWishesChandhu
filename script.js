const envelope = document.getElementById('envelope');
const message = document.getElementById('message');
const music = document.getElementById('bg-music');

// Birthday message
const birthdayText = `Happy Birthday, Chandhu!\nWishing you a wonderful year ahead.\nSoon-to-be Super Dad — tiny footsteps are on the way ✨`;

// Typewriter effect
function typeWriter(text, element, speed = 50) {
  let i = 0;
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Sparkle animation positions
function createSparkles() {
  const sparkles = document.querySelectorAll('.sparkle');
  sparkles.forEach(s => {
    s.style.top = Math.random() * window.innerHeight + 'px';
    s.style.left = Math.random() * window.innerWidth + 'px';
    s.style.animationDelay = Math.random() * 2 + 's';
  });
}

// Click to open envelope
envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  typeWriter(birthdayText, message, 40);
  music.play();
});

// Initialize sparkles
createSparkles();
