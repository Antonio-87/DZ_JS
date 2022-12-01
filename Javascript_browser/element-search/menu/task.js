
const menu = document.querySelectorAll('.menu__link');
const menu__item = Array.from(document.querySelectorAll('li'));

const duble = [];

menu__item.forEach((item) => {
    
    let a = item.querySelector('a');
    if (a) {
        let menu_sub = item.querySelector('.menu_sub');
        
        a.onclick = () => {
            
            if (duble.length != 0) {
                duble[0].classList.remove('menu_active');
                menu_sub.classList.add('menu_active');
                duble.splice(0, 1, menu_sub);
                return false;
            } else {
                menu_sub.classList.add('menu_active');
                duble.splice(0, 1, menu_sub);
                return false;
            }
       }
    }
});