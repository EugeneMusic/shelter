const burger = document.querySelector('.burger-icon');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-icon_active');
    // menu.classList.toggle('menu_active');
    // body.classList.toggle('body_active');
});
document.querySelector('.autofocus').focus()
