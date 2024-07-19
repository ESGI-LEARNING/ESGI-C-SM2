export const Burger = function burger() {
    const header = document.querySelector('header');
    const burgerMenu = header.querySelector('.burger-menu');
    if (burgerMenu) {
        const nav = header.querySelector('nav');
        nav.classList.toggle('open');
        burgerMenu.classList.toggle('open');
    }
};
