// Dark/Light Toggle
const themeToggle = document.getElementById('theme-toggle');
let isDark = true;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        document.documentElement.style.setProperty('--bg', '#0F0F1F');
        document.documentElement.style.setProperty('--surface', '#1A1A2E');
        document.documentElement.style.setProperty('--text', '#F0F4FF');
    } else {
        document.documentElement.style.setProperty('--bg', '#1A1A2E');
        document.documentElement.style.setProperty('--surface', '#2A2A45');
        document.documentElement.style.setProperty('--text', '#F0F0FF');
    }
    themeToggle.textContent = isDark ? '🌑' : '☀️';
});

// Safe Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "# ") return;

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hamburger Click
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        alert("📱 Mobile menu coming soon!\n\nFor now you can use the navigation links.");
    });
}

window.addEventListener('load', () => {
    console.log('%c✅ Portfolio loaded ⚡', 'color: #00F0FF; font-weight: bold;');
});
