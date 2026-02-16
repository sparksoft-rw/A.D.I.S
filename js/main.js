// Dark Mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.onclick = () => {
  navMenu.classList.toggle("active");
};

// Fade-in scroll
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      el.classList.add("visible");
    }
  });
});

// Counter Animation
const counters = document.querySelectorAll(".count");
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = target / 200;
    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 10);
    } else {
      counter.innerText = target;
    }
  };
  update();
});

