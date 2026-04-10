// Dark/Light Toggle (keeps neon feel)
const themeToggle = document.getElementById('theme-toggle');
let isDark = true;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.style.setProperty('--bg', isDark ? '#0A0A0F' : '#1A1A2E');
  themeToggle.textContent = isDark ? '🌑' : '☀️';
});

// Mobile Hamburger (basic)
document.querySelector('.hamburger').addEventListener('click', () => {
  alert("Mobile menu would open here – add your toggle logic!");
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
