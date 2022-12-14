const BODY = document.querySelector('body');
const TABS = Array.from(document.querySelectorAll('.tab'));
const TAB_CONTENTS = Array.from(document.querySelectorAll('.tab__content'));

BODY.addEventListener('click', (e) => {
    let target = e.target;
    let parentTabs = target.closest('.tabs')
    let tabActive = BODY.querySelector('.tab_active');
    let contentActive = BODY.querySelector('.tab__content_active');
    if (parentTabs)  {
        if (target.closest('.tab__contents') == null) {
            if ((tabActive != null) & (contentActive != null)) {
                target.classList.add('tab_active');
                TAB_CONTENTS[TABS.indexOf(target)].classList.add('tab__content_active');
                if (target != tabActive) {
                    tabActive.classList.remove('tab_active');
                    contentActive.classList.remove('tab__content_active');
                }
            } else {
                target.classList.add('tab_active');
                TAB_CONTENTS[TABS.indexOf(target)].classList.add('tab__content_active');
            }
        }
    }  
});