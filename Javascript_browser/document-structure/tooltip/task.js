const a = [...document.getElementsByTagName('a')];

a.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;
        const popup = document.createElement('div');
        popup.className = "tooltip tooltip_active";
        popup.innerHTML = `${elem.title}`;
        const {left, bottom} = target.getBoundingClientRect();
        let activePopup = document.querySelector('.tooltip_active');
        if (!activePopup) {
            target.insertAdjacentElement('afterend', popup);
            popup.setAttribute('style', `left: ${left}px; top: ${bottom}px`);
        };
        
        if (activePopup) {
            if (activePopup.textContent == target.title) {
                activePopup.classList.toggle('tooltip_active');
            };

            if (activePopup.textContent != target.title) {
                activePopup.textContent = target.title;
                activePopup.setAttribute('style', `left: ${left}px; top: ${bottom}px`);
            };
        };
    });
});

window.addEventListener('scroll', () => {
    let activePopup = document.querySelector('.tooltip_active');
    a.forEach(el => {
        const { top } = el.getBoundingClientRect();
        if (top < window.innerHeight && top > 0) {
            return;
        } else {
            activePopup.classList.remove('tooltip_active');
        };
    });
});
