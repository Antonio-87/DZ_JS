const lt = document.querySelector('.slider__arrow_prev');
const gt = document.querySelector('.slider__arrow_next');
const slide = Array.from(document.querySelectorAll('.slider__item'));
const points = Array.from(document.querySelectorAll('.slider__dot'));

let i = 0;

lt.onclick = () => {
    slide[i].classList.toggle('slider__item_active');
    i--;
    if (i == -1) {
        i = slide.length - 1
    }  
    slide[i].classList.toggle('slider__item_active');
}

gt.onclick = () => {
    slide[i].classList.toggle('slider__item_active');
    i++;
    if (i > slide.length - 1) {
        i = 0
    }
    slide[i].classList.toggle('slider__item_active');
}

const duble = [];

points.forEach((i) => {
    let p = points.indexOf(i);
    i.onclick = () => {
        if (duble.length != 0) {
            duble[0].classList.remove('slider__item_active');
            slide[p].classList.add('slider__item_active');
            duble.splice(0, 1, slide[p]);
        } else {
            slide[p].classList.add('slider__item_active');
            duble.splice(0, 1, slide[p]);
        }
    }
})
    
