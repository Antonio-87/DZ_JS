const popup_active = document.querySelector('#modal_main');
const popup_close = document.querySelectorAll('.modal__close');
const show = document.querySelector('.show-success');
const popup_success = document.querySelector('#modal_success');

popup_active.classList.add('modal_active');



popup_close.forEach((modal) => {

    let parent = modal.parentElement.parentElement;
    modal.onclick = () => {
        if (!modal.classList.contains('show-success'))
            if (parent == document.getElementById('modal_main')) {
                popup_active.classList.toggle('modal_active', false);
            } else if (parent == document.getElementById('modal_success')) {
                popup_active.classList.toggle('modal_active', false);
                popup_success.classList.toggle('modal_active', false);
            }
    };
});

show.onclick = () => {
    
    popup_success.classList.add('modal_active');
};