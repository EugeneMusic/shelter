const burger = document.querySelector('.burger-icon');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');
const wrapper1 = document.querySelector('.wrapper1');
const items = document.querySelector('.nav_list');
const logo = document.querySelector('.logo-burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-icon_active');
    nav.classList.toggle('nav_active');
    body.classList.toggle('body_active');
    wrapper1.classList.toggle('wrapper1_active');
});
body.addEventListener('click', (event) => {
    if (event.target.classList.contains('body_active')) {
        burger.classList.remove('burger-icon_active');
        nav.classList.remove('nav_active');
        body.classList.remove('body_active');
        wrapper1.classList.remove('wrapper1_active');
    };
});
items.addEventListener('click', (event) => {
    console.log(!event.target.classList.contains('nav'));
    if (event.target.className == '' && !event.target.classList.contains('nav')) {
        burger.classList.remove('burger-icon_active');
        nav.classList.remove('nav_active');
        body.classList.remove('body_active');
        wrapper1.classList.remove('wrapper1_active');
    }
});
logo.addEventListener('click', () => {
    burger.classList.remove('burger-icon_active');
    nav.classList.remove('nav_active');
    body.classList.remove('body_active');
    wrapper1.classList.remove('wrapper1_active');
});
document.querySelector('.autofocus').focus()
