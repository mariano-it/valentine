/* ======================
   BOTÓN FINAL → SAN VALENTÍN
====================== */
const surpriseBtn = document.getElementById("surpriseBtn");
const valentin = document.getElementById("valentin");

surpriseBtn.addEventListener("click", () => {
  valentin.classList.add("visible"); // 🔥 ESTA ES LA CLAVE
  valentin.scrollIntoView({ behavior: "smooth" });
  surpriseBtn.style.display = "none";
});



/* ======================
   SECUENCIA 14 DE FEBRERO
====================== */
const steps = document.querySelectorAll("#valentin .step");

steps.forEach((step, index) => {
  step.style.animationDelay = `${index * 1.8}s`;
});


/* ======================
   BOTONES SÍ / OBVIO
====================== */
const yesBtn = document.getElementById("yesBtn");
const yesBtn2 = document.getElementById("yesBtn2");
const flower = document.getElementById("flower");

function showFlower() {
  document.querySelector(".buttons").style.display = "none";
  flower.style.display = "block";
}

yesBtn.addEventListener("click", showFlower);
yesBtn2.addEventListener("click", showFlower);


/* ======================
   START SCREEN + MÚSICA
====================== */
const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");

document.body.classList.add("locked");

startBtn.addEventListener("click", async () => {
  try {
    await music.play();
  } catch (e) {
    console.log("Autoplay bloqueado, pero seguimos.");
  }

  startScreen.classList.add("fade-out");

  setTimeout(() => {
    startScreen.remove();
    document.body.classList.remove("locked");
  }, 2000);
});


/* ======================
   REVEAL GENERAL (scroll)
====================== */
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => revealObserver.observe(el));
