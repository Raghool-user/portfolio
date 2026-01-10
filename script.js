window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15, 23, 42, 0.95)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.background = "rgba(15, 23, 42, 0.9)";
        navbar.style.boxShadow = "none";
    }
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
if(burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}
