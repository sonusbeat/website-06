const body = document.querySelector('body');
const hamburguer = document.querySelector('#hamburguer');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const hasFades = document.querySelectorAll('.has-fade');

hamburguer.addEventListener('click', function () {
    if(header.classList.contains('close')) {
        // close hamburguer
        header.classList.remove('close');
        body.classList.remove('close');
        hasFades.forEach(element => {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else {
        // open hamburguer
        body.classList.add('not-scroll');
        header.classList.add('close');
        hasFades.forEach(element => {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});