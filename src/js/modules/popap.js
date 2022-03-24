
function popap (data){
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
                    <img src=${data[index].thumbnail} alt="img car">
                    <div class="numImg">${data[index].name}</div>
                </div>
                `;
    
                const closeModal =  document.querySelector(".modal__wrapper span");
    
                closeModal.addEventListener('click', () => {
                    modal.remove();
                });
            })
        })
}

export default popap;