const form = document.getElementById('signin__form');

const URL = 'https://students.netoservices.ru/nestjs-backend/auth';

const id = JSON.parse(localStorage.getItem('id'));

if (id) {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#user_id').textContent = id;
        chengeActive();
    });
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    fetch(URL, {
        method: 'POST',
        body: new FormData(form)
    }).then(response => {
        if (response.ok) {
            response.json().then(resp => {
                if (resp.success == false) {
                    alert('Неверный логин/пароль');
                    e.target.reset();
                } else {
                    localStorage.setItem('id', JSON.stringify(resp.user_id));
                    document.querySelector('#user_id').textContent = resp.user_id;
                    chengeActive();
                    e.target.reset();
                };
            });
        } else {
            alert('Ошибка в HTTP: ' + response.status);
        };
    });
});

let button = document.createElement('button');
button.className = 'deauthorization';
button.insertAdjacentText("afterbegin", 'Выйти');
document.querySelector('.welcome').insertAdjacentElement("beforeEnd", button);

button.addEventListener('click', () => {
        localStorage.clear();
        chengeActive();
    });

function chengeActive() {
    document.querySelector('.welcome').classList.toggle('welcome_active');
    document.querySelector('.signin').classList.toggle('signin_active');
};