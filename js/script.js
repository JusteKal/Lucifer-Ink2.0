document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');
    const images = document.querySelectorAll('.div1, .div2, .div3, .div4, .div5, .div6, .column, .rdv-box');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    const revealImages = () => {
        images.forEach(image => {
            image.classList.add('visible');
        });
    };

    const c = document.createComment(`
                        __       __
                      '.'--.--'.-'
        .,_------.___,   \' r'
        ', '-._a      '-' .'
         '.    '-'Y \._  /
          '--;____'--.'-,
      Kal /..'       '''
    `);
    document.head.insertBefore( c, document.head.firstElementChild );

    revealImages();
});
