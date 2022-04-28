const burger = document.querySelector('.burger-icon');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');
const wrapper1 = document.querySelector('.wrapper1');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-icon_active');
    nav.classList.toggle('nav_active');
    body.classList.toggle('body_active');
    wrapper1.classList.toggle('wrapper1_active');
}); 
wrapper1.addEventListener('click', () => {
    burger.classList.toggle('burger-icon_active');
    nav.classList.toggle('nav_active');
    body.classList.toggle('body_active');
    wrapper1.classList.toggle('wrapper1_active');
}); 
document.querySelector('.autofocus').focus()
