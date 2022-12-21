const widget = document.querySelector('.chat-widget');
const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );

const oneMessageTime = document.querySelector('.message__time');

let robotAnswers = [
    'Че хотим?',
    'Ничего не понял!',
    'Все равно не понял!',
    'Я не тупой!',
    'Прощайте!',
]

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let hours = date.getHours();
let minutes = date.getMinutes();
let dateTime =`
    ${zero(day)} ${zero(month)} ${year} ${zero(hours)}:${zero(minutes)}
`
oneMessageTime.textContent = dateTime;

let activity = 0;

setInterval(() => {
    activity++;
    let activWidget = widget.classList.contains('chat-widget_active');
    if ((activWidget) & (activity == 30)) {
        messageFormat('Ну вы будете заказывать?', 'Сообщение от робота');
        activity = 0;
    }
}, 1000);

document.addEventListener('click', (e) => {
    widget.classList.add('chat-widget_active');
    if (!e.composedPath().includes(widget)) {
    widget.classList.remove('chat-widget_active');
    }
});

window.addEventListener('keyup', (e) => {
    const key = e.key;
    if ((key == 'Enter') & (input.value != '')) {
        messageFormat(input.value, 'Сообшение от клиента', 'message_client');
        input.value = '';
        setTimeout(() => {
            messageFormat(robotAnswers[getRandomInt(robotAnswers.length)], 'Сообщение от робота');
        }, 2000);
        activity = 0;
    }
});
 
function zero(count) {
    return countZero = count < 10? `0${count}`: count;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
};

function messageFormat(message, whose, customerLabel=NaN) {
    messages.innerHTML += `
    ${whose}
    <div class="message ${customerLabel}">
        <div class="message__time">${dateTime}</div>
        <div class="message__text">
        ${message}
        </div>
    </div>
    `;
    messages.lastElementChild.scrollIntoView({block: "center", behavior: "smooth"});
};