
// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme in LocalStorage
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'light') {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Scroll Reveal Transition Logic using Intersection Observer
const observerOptions = {
    threshold: 0.15 // Section reveals when 15% visible
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Select all elements with the .reveal class
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Navbar shadow and background adjustment on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

// Mobile Burger Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
if(burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        if(nav.classList.contains('active')) {
            nav.style.display = 'flex';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '70px';
            nav.style.width = '100%';
            nav.style.background = 'var(--bg-main)';
        } else {
            nav.style.display = 'none';
        }
    });
}
