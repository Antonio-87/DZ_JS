const poolTitle = document.querySelector('.poll__title');
const poolAnswers = document.querySelector('.poll__answers');

const URL = 'https://students.netoservices.ru/nestjs-backend/poll';
const URL_POST = 'https://students.netoservices.ru/nestjs-backend/poll';

fetch(URL).then(response => {
    if (response.ok) {
        response.json().then(resp => {
            poolTitle.insertAdjacentText('afterbegin', resp.data.title);
            let answers = resp.data.answers;
            answers.forEach(el => {
                poolAnswers.innerHTML += `
                    <button class="poll__answer">
                        ${el}
                    </button>
                `
            });

            const poolAnswerList = [...document.querySelectorAll('.poll__answer')];
                
            poolAnswerList.forEach(el => {
                el.addEventListener('click', () => {
                    let id = resp.id;
                    let indexAnswer = poolAnswerList.indexOf(el);
                    alert('Спасибо, ваш голос засчитан!');

                    fetch(URL_POST, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json;charset=utf-8'},
                        body: JSON.stringify({vote: `${id}`, answer: `${indexAnswer}`})
                    }).then(response => {
                        if (response.ok) {
                            response.json().then(resp => {
                                poolAnswerList.forEach(el => el.remove());
                                let stat = resp.stat;
                                let votesList = [];
                                stat.forEach(el => votesList.push(el.votes));
                                let sumVote = votesList.reduce((a, b) => a + b, 0);
                                stat.forEach(el => {
                                    poolAnswers.innerHTML += `
                                        <div class="stat__answer">
                                            ${el.answer} ${Math.round((el.votes * 100)/ sumVote)} %
                                        </div>
                                    `
                                });
                            });
                        } else {
                            alert('Ошибка в HTTP:' + response.status);
                        };
                    });
                });
            });
        });
    } else {
        alert('Ошибка в HTTP:' + response.status);
    };
});

