const BODY = document.querySelector('body');

BODY.addEventListener('click', (e) => {
    let target = e.target;
    let parentBook = target.closest('.book');
    let font = parentBook.querySelector('.book__control_font-size');
    let activeFont = font.querySelector('.font-size_active');
    let textColor = parentBook.querySelector('.book__control_color');
    let activeTextColor = textColor.querySelector('.color_active');
    let backgroundColor = parentBook.querySelector('.book__control_background');
    let activeBackgroundColor = backgroundColor.querySelector('.color_active');
    if (parentBook) {
        if (target.parentElement == font) {
            if (target != activeFont) {
                target.classList.add('font-size_active');
                activeFont.classList.remove('font-size_active');
                Object.assign(parentBook.style, {
                    color: `${activeTextColor.dataset.textColor}`,
                    background: `${activeBackgroundColor.dataset.bgColor}`,
                  });
                if (target.classList.contains('font-size_small')) {
                    parentBook.classList.add('book_fs-small');
                    parentBook.classList.remove('book_fs-big');
                    e.preventDefault();
                } else if (target.classList.contains('font-size_big')) {
                    parentBook.classList.add('book_fs-big');
                    parentBook.classList.remove('book_fs-small');
                    e.preventDefault();
                } else {
                    parentBook.classList.remove('book_fs-big');
                    parentBook.classList.remove('book_fs-small');
                    e.preventDefault();
                }  
            }
            e.preventDefault();
        }

        if (target.parentElement == textColor) {
            if (target != activeTextColor) {
                target.classList.add('color_active');
                activeTextColor.classList.remove('color_active');
                Object.assign(parentBook.style, {
                    color: `${target.dataset.textColor}`,
                    background: `${activeBackgroundColor.dataset.bgColor}`,
                  });
                e.preventDefault();
            }
            e.preventDefault();
        }

        if (target.parentElement == backgroundColor) {
            if (target != activeBackgroundColor) {
                target.classList.add('color_active');
                activeBackgroundColor.classList.remove('color_active');
                Object.assign(parentBook.style, {
                    color: `${activeTextColor.dataset.textColor}`,
                    background: `${target.dataset.bgColor}`,
                  });
                e.preventDefault();
            }
            e.preventDefault();
        }
    }
});