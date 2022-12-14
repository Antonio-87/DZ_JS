const ROTATORS = Array.from(document.querySelectorAll('.rotator__case'));

ROTATORS[0].setAttribute('style', `color: ${ROTATORS[0].dataset.color}`);

let i = 0;

setInterval(() => {
    const ROTATOR = document.querySelector('.rotator__case');
    let parentRotator = ROTATOR.closest('.card');
    let rotatorActiv = parentRotator.querySelector('.rotator__case_active');
    if (parentRotator) {
        i++;

        if (i < ROTATORS.length) {
            ROTATORS[i].classList.add('rotator__case_active');
            ROTATORS[i].setAttribute('style', `color: ${ROTATORS[i].dataset.color}`);
            rotatorActiv.classList.remove('rotator__case_active');
        } else {
            i = 0;
            ROTATORS[i].classList.add('rotator__case_active')
            rotatorActiv.classList.remove('rotator__case_active');  
        }
    }
}, 1000);