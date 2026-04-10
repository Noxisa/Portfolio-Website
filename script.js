onst themeToggle = document.getElementById('theme-toggle');
let isDark = true;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;

    if (isDark) {
        document.documentElement.style.setProperty('--bg', '#0A0A0F');
        document.documentElement.style.setProperty('--surface', '#12121A');
        document.documentElement.style.setProperty('--text', '#E0E0FF');
    } else {
        document.documentElement.style.setProperty('--bg', '#1A1A2E');
        document.documentElement.style.setProperty('--surface', '#2A2A45');
        document.documentElement.style.setProperty('--text', '#F0F0FF');
    }

    themeToggle.textContent = isDark ? '🌑' : '☀️';
});

// 2. Safe Smooth Scrolling (Fixed!)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Skip if it's just "#" (like "View Project →" buttons)
        if (targetId === "#" || targetId === "# ") {
            return; // Do nothing, prevent error
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            e.preventDefault(); // Only prevent default if we have a valid section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3. Mobile Hamburger (Basic)
const hamburger = document.querySelector('.hamburger');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        alert("🚀 Mobile menu is coming soon!\n\nYou can use the top navigation for now.");
    });
}

// 4. Initialize when page loads
window.addEventListener('load', () => {
    console.log('%c✅ Neon Cyber Portfolio loaded successfully ⚡', 
                'color: #00D4FF; font-size: 14px; font-weight: bold;');
});
