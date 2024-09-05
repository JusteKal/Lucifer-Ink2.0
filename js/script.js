document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');
    const images = document.querySelectorAll('.div1, .div2, .div3, .div4, .div5, .div6');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    const revealImages = () => {
        images.forEach(image => {
            const imageTop = image.getBoundingClientRect().top;
            const imageHeight = image.offsetHeight;
            const windowHeight = window.innerHeight;
            if (imageTop < windowHeight && imageTop + imageHeight > 0) {
                image.classList.add('visible');
            }
        });
    };

    revealImages(); // Call revealImages initially to reveal images on page load
});