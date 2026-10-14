// Theme toggle
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light');
  themeBtn.textContent = '☀️';
} else {
  themeBtn.textContent = '🌑';
}

themeBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  
  if (body.classList.contains('light')) {
    themeBtn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    themeBtn.textContent = '🌑';
    localStorage.setItem('theme', 'dark');
  }
});

// Mobile menu (hamburger)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
