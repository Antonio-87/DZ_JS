const items = document.querySelector('#items');
const loader = document.querySelector('.loader');
const item = [...document.querySelectorAll('.item')];

const URL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

if (data.length != 0) {
    loader.classList.remove('loader_active');
    data.forEach(el => {
        items.innerHTML += el
    });

    data = [];
};

fetch(URL).then(response => {
    if (response.ok) {
        item.forEach(el => el.remove());
        response.json().then(resp => {
            let valutes = resp.response.Valute;
            for (let key in valutes) {
                let html = `
                    <div class="item">
                        <div class="item__code">
                            ${valutes[key].CharCode}
                        </div>
                        <div class="item__value">
                            ${valutes[key].Value}
                        </div>
                        <div class="item__currency">
                            руб.
                        </div>
                    </div>
                `
                items.innerHTML += html;
                itemsArray.push(html);
                localStorage.setItem('items', JSON.stringify(itemsArray));
            };

            loader.classList.remove('loader_active');
        });
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
});