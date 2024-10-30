// Initialize particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#ffffff" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" },
            "polygon": { "nb_sides": 5 }
        },
        "opacity": { "value": 0.5 },
        "size": { "value": 3, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": { "enable": true, "speed": 6 }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
            "bubble": { "distance": 400, "size": 40, "duration": 2 },
            "push": { "particles_nb": 4 },
            "remove": { "particles_nb": 2 }
        }
    },
    "retina_detect": true
});

// Progress Bar Animation
document.addEventListener("DOMContentLoaded", () => {
    const skillLevels = { htmlBar: 90, cssBar: 75, jsBar: 40 };
    Object.entries(skillLevels).forEach(([barId, percentage], index) => {
        setTimeout(() => {
            document.getElementById(barId).style.width = percentage + '%';
        }, index * 300);
    });
});

//  Animation bonjour Samuel
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("intro-text").style.animation = "pulseGlow 4s infinite ease-in-out";
    }, 1000);
});


//  navigation

function toggleNavbar() {
    const navbarLinks = document.getElementById("navbarNav");
    navbarLinks.classList.toggle("open");
}










