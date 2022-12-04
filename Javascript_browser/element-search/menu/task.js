const MENU_ITEM = Array.from(document.querySelectorAll('li'));

const DUBLE = [];

MENU_ITEM.forEach((item) => {
    
    let stop = false
    let a = item.querySelector('a');
    if (a) {
        let menuSub = item.querySelector('.menu_sub');
        
        a.onclick = (e) => {
            if (stop === true) {
                e.stopPropagation;
            } else if (menuSub != null) {
                if (DUBLE.length != 0) {
                    DUBLE[0].classList.remove('menu_active');
                    menuSub.classList.add('menu_active');
                    DUBLE.splice(0, 1, menuSub);
                    stop = true;
                    return false;
                } else {
                    menuSub.classList.add('menu_active');
                    DUBLE.splice(0, 1, menuSub);
                    stop = true;
                    return false;
                }
            }
       }
    }
});