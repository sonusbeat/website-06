const hamburguer = document.querySelector('#hamburguer');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

hamburguer.addEventListener('click', function () {
    if(header.classList.contains('close')) {
        // close hamburguer
        header.classList.remove('close');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } else {
        // open hamburguer
        header.classList.add('close');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
});