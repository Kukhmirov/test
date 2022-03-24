
function gamburgerMenu (){

    const menuToggle = document.querySelector('.hamburger-menu'),
                body = document.querySelector('.body');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('hamburger-menu--active');
        document.querySelector('.head__body').classList.toggle('head__body--active');
        menuToggle.classList.contains('hamburger-menu--active') ? body.style.overflow = 'hidden' : body.style.overflow = 'initial';
    });

}

export default gamburgerMenu;