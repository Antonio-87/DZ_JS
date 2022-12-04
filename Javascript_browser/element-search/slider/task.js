const LT = document.querySelector('.slider__arrow_prev');
const GT = document.querySelector('.slider__arrow_next');
const SLIDES = Array.from(document.querySelectorAll('.slider__item'));
const POINTS = Array.from(document.querySelectorAll('.slider__dot'));

/**Так как изначально точка не подсвечена */
let slideActiveIndex = SLIDES.findIndex((item) => item.classList.contains('slider__item_active'));
POINTS[slideActiveIndex].classList.add('slider__dot_active');

let slider = (index) => {
    active = (i) => {
        SLIDES[i].classList.toggle('slider__item_active', true);
        POINTS[i].classList.toggle('slider__dot_active', true);
    }
    
    let slideActiveIndex = SLIDES.findIndex((item) => item.classList.contains('slider__item_active'));

    if (slideActiveIndex != -1) {
        SLIDES[slideActiveIndex].classList.remove('slider__item_active');
        POINTS[slideActiveIndex].classList.remove('slider__dot_active');
    }
    
    if (index == -1) {
        index= SLIDES.length - 1;
        active(index);
    } else if (index > SLIDES.length - 1) {
        index = 0;
        active(index);
    } else {
        active(index);
    }
}


LT.onclick = () => {
    let slideActiveIndex = SLIDES.findIndex((item) => item.classList.contains('slider__item_active'));
    slideActiveIndex--;
    slider(slideActiveIndex);
}

GT.onclick = () => {
    let slideActiveIndex = SLIDES.findIndex((item) => item.classList.contains('slider__item_active'));
    slideActiveIndex++;
    slider(slideActiveIndex);
}

POINTS.forEach((point) => {
    point.onclick = (e) => {
        slider(POINTS.indexOf(e.target));
    }
});

