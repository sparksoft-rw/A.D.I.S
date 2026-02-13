// Dark Mode
const toggle = document.getElementById("themeToggle");

if(toggle){
    toggle.addEventListener("click", () => {
        const html = document.documentElement;
        if(html.getAttribute("data-theme") === "dark"){
            html.setAttribute("data-theme","light");
            toggle.textContent="🌙";
        } else {
            html.setAttribute("data-theme","dark");
            toggle.textContent="☀️";
        }
    });
}

// Scroll Reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});

// Counters
document.querySelectorAll('.counter').forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 200;

        if(count < target){
            counter.innerText = Math.ceil(count + increment);
            setTimeout(update,10);
        } else {
            counter.innerText = target;
        }
    };
    update();
});
