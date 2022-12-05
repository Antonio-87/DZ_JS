const POPUP_ACTIVE = document.querySelector('#modal_main');
const POPUP_CLOSE = document.querySelectorAll('.modal__close');
const SHOW = document.querySelector('.show-success');
const POPUP_SUCCESS = document.querySelector('#modal_success');

POPUP_ACTIVE.classList.add('modal_active');

POPUP_CLOSE.forEach((modal) => {

    let parent = modal.parentElement.parentElement;
    modal.onclick = () => {
        if (!modal.classList.contains('show-success')) {
            if (parent == document.getElementById('modal_main')) {
                POPUP_ACTIVE.classList.toggle('modal_active', false);
            } else if (parent == document.getElementById('modal_success')) {
                POPUP_ACTIVE.classList.toggle('modal_active', false);
                POPUP_SUCCESS.classList.toggle('modal_active', false);
            }
        }
    };
});

SHOW.onclick = () => {
    POPUP_ACTIVE.classList.toggle('modal_active', false);
    POPUP_SUCCESS.classList.add('modal_active');
};