const main = document.querySelector('main');
const input = document.querySelector('input');
const button = document.querySelector('button')
const taskList = document.querySelector('.tasks__list');

main.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target == button && input.value.trim() != '') {
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
                ${input.value.trim()}
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
    };
};