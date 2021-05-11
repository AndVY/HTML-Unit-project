const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');

navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon--active');
    nav.classList.toggle('nav--active');
});

// Hide mobile menu after click on link 
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(function (value) {
    value.addEventListener('click', function () {
        navIcon.classList.remove('nav-icon--active');
        nav.classList.remove('nav--active');
    });
});

