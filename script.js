const btn = document.getElementById("btn");
const intro = document.querySelector(".intro");
const main = document.querySelector(".main");

btn.addEventListener("click", () => {
  intro.style.display = "none";
  main.classList.remove("hidden");

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
});
