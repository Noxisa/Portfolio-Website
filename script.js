// 1. Dark/Light Mode Toggle (Improved)
const themeToggle = document.getElementById('theme-toggle');
let isDark = true;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;

    if (isDark) {
        // Dark mode (original neon cyber)
        document.documentElement.style.setProperty('--bg', '#0A0A0F');
        document.documentElement.style.setProperty('--surface', '#12121A');
        document.documentElement.style.setProperty('--text', '#E0E0FF');
    } else {
        // Soft neon light mode (still looks futuristic)
        document.documentElement.style.setProperty('--bg', '#1A1A2E');
        document.documentElement.style.setProperty('--surface', '#2A2A45');
        document.documentElement.style.setProperty('--text', '#F0F0FF');
    }

    themeToggle.textContent = isDark ? '🌑' : '☀️';
});

// 2. Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3. Mobile Hamburger Menu (Basic version - shows alert for now)
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    alert("🚀 Mobile menu coming soon!\n\nFor now, you can use the navigation links above.");
    
    // Future improvement: You can later replace this with a real sliding menu
});

// 4. Typing Effect Enhancement (Optional but nice)
function addTypingEffect() {
    const typingElement = document.querySelector('.typing');
    if (typingElement) {
        typingElement.style.overflow = 'hidden';
        typingElement.style.borderRight = '3px solid var(--accent-cyan)';
        typingElement.style.whiteSpace = 'nowrap';
    }
}

// Initialize everything when page loads
window.addEventListener('load', () => {
    addTypingEffect();
    
    // Optional: Add a small console message
    console.log('%cNeon Cyber Portfolio loaded successfully ⚡', 'color: #00D4FF; font-weight: bold;');
});
