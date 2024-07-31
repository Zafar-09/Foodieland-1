document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const blurBg = document.getElementById('blur-bg');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        blurBg.classList.toggle('active');
    });

    blurBg.addEventListener('click', function () {
        navLinks.classList.remove('active');
        blurBg.classList.remove('active');
    });
});
