
window.addEventListener("DOMContentLoaded", () => {
    
// gamburger menu 

    const menuToggle = document.querySelector('.hamburger-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('hamburger-menu--active');
        document.querySelector('.head__body').classList.toggle('head__body--active');
    });

    // modal window

    const items = document.querySelectorAll('.item'),
          parent = document.querySelector('.parent-items');
          


    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            parent.append(modal);

            modal.innerHTML = `
            <div class="modal__wrapper">
                <span>X</span>
                <div class="numImg">${index + 1}</div>
                <img src="./img/pngegg (1).png" alt="img car">
            </div>
            `;

            const closeModal =  document.querySelector(".modal__wrapper span");

            closeModal.addEventListener('click', () => {
                modal.remove();
            });
        })
    })
});