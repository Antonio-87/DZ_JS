const MAIN = document.querySelector('main');

MAIN.onclick = (e) => {
    let target = e.target;
    let parentButton = target.closest('.dropdown');
    let dropdownList = parentButton.querySelector('.dropdown__list');
    let dropdownListActive = MAIN.querySelector('.dropdown__list_active');
    let value = parentButton.querySelector('.dropdown__value');
    if (dropdownList) {
        if (dropdownListActive != null) {
            dropdownList.classList.add('dropdown__list_active');
            dropdownListActive.classList.remove('dropdown__list_active');
        } else {
            dropdownList.classList.add('dropdown__list_active');
        }
        
        if (target.classList.contains('dropdown__link')) {
            value.textContent = target.textContent;
            return false;
        }
    };
};
