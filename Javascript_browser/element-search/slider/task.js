const lt = document.querySelector('.slider__arrow_prev');
const gt = document.querySelector('.slider__arrow_next');
const slide = Array.from(document.querySelectorAll('.slider__item'));
const points = Array.from(document.querySelectorAll('.slider__dot'));

let i = 0;

lt.onclick = () => {
    slide[i].classList.toggle('slider__item_active');
    points[i].classList.remove('slider__dot_active');
    i--;
    if (i == -1) {
        i = slide.length - 1
    }  
    slide[i].classList.toggle('slider__item_active');
    points[i].classList.toggle('slider__dot_active');
}

gt.onclick = () => {
    slide[i].classList.toggle('slider__item_active');
    points[i].classList.remove('slider__dot_active');
    i++;
    if (i > slide.length - 1) {
        i = 0
    }
    slide[i].classList.toggle('slider__item_active');
    points[i].classList.toggle('slider__dot_active');
}

// let duble = [];

// points.forEach((point) => {
//     point.onclick = (e) => {
//         let elem = e.target;
//         if (duble.length != 0) {
//             duble[0].classList.remove('slider__dot_active');
//             slide[points.indexOf(elem)].classList.toggle('slider__item_active');
//             elem.classList.toggle('slider__dot_active');
//             duble.splice(0, 1, elem);
//         } else {
//             slide[points.indexOf(elem)].classList.toggle('slider__item_active');
//             elem.classList.toggle('slider__dot_active');
//             duble.splice(0, 1, elem);
//         }
//     }
// });
    
