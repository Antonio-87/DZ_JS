const main = document.querySelector('main');
const input = document.querySelector('input');
const button = document.querySelector('button')
const taskList = document.querySelector('.tasks__list');

window.addEventListener('keyup', (e) => {
    let key = e.key;
    if ((key =='Enter') & (input.value != '')) {
        removeDuble(input);
        message(taskList, input);
        input.value = '';
    };
});

main.addEventListener('click', (e) => {
    let target = e.target;
    if ((target == button) & (input.value != '')) {
        removeDuble(input);
        message(taskList, input);
        input.value = '';
    };
    
    if (target.classList.contains('task__remove')) {
        target.closest('.task').remove();  
    };
});

function message(tasks, input) {
    tasks.innerHTML += `
        <div class="task">
            <div class="task__title">
                ${input.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `;
};

function removeDuble(input) {
    let tasks = [...document.querySelectorAll('.task__title')];
    if (tasks.length != 0) {
        tasks.forEach(el => {
            if (el.textContent.includes(input.value)) {
                el.closest('.task').remove()
            };
        });
    }
    return;
};