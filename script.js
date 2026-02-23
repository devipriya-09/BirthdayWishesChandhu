const btn = document.getElementById('btn');
const main = document.querySelector('.main');
const intro = document.querySelector('.intro');
const confettiCanvas = document.getElementById('confetti');
const balloonsContainer = document.getElementById('balloons');

// Pink dots confetti
function startPinkDots() {
  const ctx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const dots = [];
  const colors = ['#ff69b4', '#ffc0cb', '#ff1493'];

  for (let i = 0; i < 150; i++) {
    dots.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height,
      radius: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 1 + 0.5
    });
  }

  function animate() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    dots.forEach(dot => {
      dot.y += dot.speed;
      if (dot.y > confettiCanvas.height) {
        dot.y = -dot.radius;
        dot.x = Math.random() * confettiCanvas.width;
      }

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = dot.color;
      ctx.fill();
      ctx.closePath();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// Floating balloons
function startBalloons() {
  const balloonImages = ['images/balloon1.png','images/balloon2.png','images/balloon3.png'];
  const numBalloons = 12;

  for (let i = 0; i < numBalloons; i++) {
    const balloon = document.createElement('img');
    balloon.src = balloonImages[Math.floor(Math.random() * balloonImages.length)];
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.width = 30 + Math.random() * 40 + 'px';
    balloon.style.animationDuration = 8 + Math.random() * 5 + 's';
    balloonsContainer.appendChild(balloon);
  }
}

// Click to celebrate
btn.addEventListener('click', () => {
  intro.classList.add('hidden');
  main.classList.remove('hidden');

  startPinkDots();
  startBalloons();

  // Extra confetti burst
  const myConfetti = confetti.create(confettiCanvas, { resize: true, useWorker: true });
  myConfetti({
    particleCount: 100,
    spread: 360,
    origin: { x: 0.5, y: 0.5 },
    colors: ['#ff69b4', '#ffc0cb', '#ff1493']
  });
});
