const MENU_SUB = Array.from(document.querySelectorAll('.menu_sub'));
const LINKS = Array.from(document.querySelectorAll('.menu__link'));

LINKS.forEach((a) => {
    a.onclick = () => {
        let activeMenu = MENU_SUB.findIndex((item) => item.classList.contains('menu_active'));
        let parentLink = a.closest('.menu__item')
        let menuSub = parentLink.querySelector('.menu_sub');
        if (menuSub != null) {
            if (activeMenu != -1) {
                menuSub.classList.add('menu_active');
                MENU_SUB[activeMenu].classList.remove('menu_active');
                return false;
            } else {
                menuSub.classList.add('menu_active');
                return false;
            }           
        }
    }
});