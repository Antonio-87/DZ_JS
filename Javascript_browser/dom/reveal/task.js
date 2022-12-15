const REVEALS = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', () => {
    REVEALS.forEach(item => {
        let visibleElement = isVisible(item);
        if (visibleElement == true) {
            activeReveal(item);
        }
    });
    
});

function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();

    if (bottom < 0) {
        return false;
    }
    if (top > window.innerHeight) {
        return false;
    }
    return true;
    // Вариант преподавателя
// const { innerHeight } = window;
// 		const { top } = el.getBoundingClientRect();
//     if (top < innerHeight && top > 0) {
//       reveal.classList.add("reveal_active");
//     } else {
//       reveal.classList.remove("reveal_active");
//     }
};

function activeReveal(el) {
    let alreadyActive = REVEALS.findIndex((item) => item.classList.contains('reveal_active'));
    if (alreadyActive != -1) {
        el.classList.add('reveal_active');
        REVEALS[alreadyActive].classList.remove('reveal_active');
    }
    el.classList.add('reveal_active');  
}

