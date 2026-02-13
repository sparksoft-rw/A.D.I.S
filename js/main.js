// DARK MODE TOGGLE
const toggle = document.getElementById("themeToggle");

if(toggle){
    toggle.addEventListener("click", () => {
        const html = document.documentElement;
        if(html.getAttribute("data-theme") === "dark"){
            html.setAttribute("data-theme","light");
            toggle.textContent = "🌙";
        } else {
            html.setAttribute("data-theme","dark");
            toggle.textContent = "☀️";
        }
    });
}

// SCROLL REVEAL
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;
        if(position < screen - 100){
            el.classList.add("active");
        }
    });
});

// ANIMATED COUNTERS
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});
