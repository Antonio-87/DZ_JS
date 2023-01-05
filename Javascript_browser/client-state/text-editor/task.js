const editor = document.getElementById('editor');

let text = localStorage.getItem('text');

if (text) {
    editor.value = text;
} 

window.addEventListener('unload', () => {
    localStorage.setItem('text', editor.value);
});

let button = document.createElement('button');
button.className = 'remove';
button.insertAdjacentText("afterBegin", 'Очистить содержимое');
editor.insertAdjacentElement('afterEnd', button);

document.querySelector('button').addEventListener('click', () => {
    editor.value = '';
});