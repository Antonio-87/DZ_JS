const BODY = document.querySelector('body');

BODY.addEventListener('click', (e) => {
    let target = e.target;
    let parentBook = target.closest('.book');
    let activeFont = parentBook.querySelector('.font-size_active');
    if (parentBook) {
        if (target != activeFont) {
            target.classList.add('font-size_active');
            activeFont.classList.remove('font-size_active');
            if (target.classList.contains('font-size_small')) {
                parentBook.classList.add('book_fs-small');
                return false;
            } else if (target.classList.contains('font-size_big')) {
                parentBook.classList.add('book_fs-big');
                return false;
            }
            return false;
        }
        return false;
    }
});