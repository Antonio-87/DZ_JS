const dead = document.getElementById('dead');
const misses = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

function message (str) {
    alert(str);
    dead.textContent = 0;
    misses.textContent = 0;
}

for (let index = 1; index < 9; index++) {
    let hole = getHole(index);
    hole.onclick = () => {
        if (hole.className.includes( 'hole_has-mole' )) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            misses.textContent = Number(misses.textContent) + 1;
        }
            
        if (dead.textContent == 10) {
            message('Вы выграли!');
        } else if (misses.textContent == 5) {
            message('Вы проиграли!');
        }
    };
};



