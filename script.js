const btn = document.getElementById('btn');
const main = document.querySelector('.main');
const intro = document.querySelector('.intro');
const confettiCanvas = document.getElementById('confetti');

btn.addEventListener('click', () => {
  // Hide intro and show main card
  intro.classList.add('hidden');
  main.classList.remove('hidden');

  // Start full-page pink dots confetti
  const myConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
  });

  const duration = 10000; // 10 seconds
  const end = Date.now() + duration;

  (function frame() {
    myConfetti({
      particleCount: 3,
      startVelocity: 0,
      gravity: 0.4,
      ticks: 200,
      origin: { x: Math.random(), y: 0 },
      colors: ['#ff69b4', '#ffc0cb', '#ff1493']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
});
