// Fade animation
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, {threshold:0.2});

faders.forEach(f => observer.observe(f));

// Dark mode
const toggle = document.getElementById("themeToggle");
if(toggle){
  toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
  });
}

// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

if(menuToggle){
  menuToggle.addEventListener("click", ()=>{
    nav.classList.toggle("active");
  });
}

// Counters
const counters = document.querySelectorAll('.count');

const counterObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const target = +el.getAttribute("data-target");
      let count = 0;

      const update = ()=>{
        const inc = target/100;
        count += inc;
        if(count < target){
          el.innerText = Math.ceil(count);
          requestAnimationFrame(update);
        } else {
          el.innerText = target;
        }
      };
      update();
      counterObserver.unobserve(el);
    }
  });
},{threshold:0.5});

counters.forEach(c=>counterObserver.observe(c));
