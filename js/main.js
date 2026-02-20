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
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const speed = target / 100;

    function updateCount() {
      if (count < target) {
        count += speed;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    }

    updateCount();
  });

});
