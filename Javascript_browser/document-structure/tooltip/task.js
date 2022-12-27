const a = [...document.getElementsByTagName('a')];
const body = document.querySelector('body');


for (let i = 3; i < a.length; i++) {
    a[i].remove();
};

const popupOne = document.createElement('div');
const popupTwo = document.createElement('div');
popupOne.className = "tooltip";
popupTwo.className = "tooltip";
popupOne.innerHTML = `${a[1].title}`;
popupTwo.innerHTML = `${a[2].title}`;
popupTwo.setAttribute('style', 'left: 162px');
a[1].insertAdjacentElement('afterend', popupOne);
a[2].insertAdjacentElement('afterend', popupTwo);
body.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    let activePopup = body.querySelector('.tooltip_active');
    if (!activePopup) {
        if (target == a[1]) {
            popupOne.classList.add('tooltip_active');
        }
        if (target == a[2]) {
            popupTwo.classList.add('tooltip_active');
        }
    };

    if (activePopup) {
        if ((target == a[1]) & (activePopup == popupOne)) {
            popupOne.classList.remove('tooltip_active');
        }
        if ((target == a[1]) & (activePopup != popupOne)) {
            popupTwo.classList.remove('tooltip_active');
            popupOne.classList.add('tooltip_active');
        }
        if ((target == a[2]) & (activePopup == popupTwo)) {
            popupTwo.classList.remove('tooltip_active');
        }
        if ((target == a[2]) & (activePopup != popupTwo)) {
            popupOne.classList.remove('tooltip_active');
            popupTwo.classList.add('tooltip_active');
        }
    };
});


window.addEventListener('scroll', () => {
    for (let i = 0; i < 3; i++) {
        const { top } = a[i].getBoundingClientRect();
    if (top < window.innerHeight && top > 0) {
        return;
    } else {
        popupOne.classList.remove('tooltip_active');
        popupTwo.classList.remove('tooltip_active');
    }
    }
    
})

  
