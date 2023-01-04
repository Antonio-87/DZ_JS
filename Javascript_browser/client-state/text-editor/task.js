const editor = document.getElementById('editor');

let text = JSON.parse(localStorage.getItem('text'));

if (text) {
    editor.value = text;
    window.addEventListener('unload', () => {
        localStorage.setItem('text', JSON.stringify(editor.value));
    });

} else {
    window.addEventListener('unload', () => {
        localStorage.setItem('text', JSON.stringify(editor.value));
    });
};


let button = document.createElement('button');
button.className = 'remove';
button.insertAdjacentText("afterBegin", 'Очистить содержимое');
editor.insertAdjacentElement('afterEnd', button);

document.querySelector('button').addEventListener('click', () => {
    editor.value = '';
});