// Dark Mode Toggle
const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {
    const html = document.documentElement;
    if(html.getAttribute("data-theme") === "light"){
        html.setAttribute("data-theme", "dark");
        toggle.textContent = "☀️";
    } else {
        html.setAttribute("data-theme", "light");
        toggle.textContent = "🌙";
    }
});

// Scroll Reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screen = window.innerHeight;
        if(position < screen - 100){
            el.classList.add("active");
        }
    });
});
