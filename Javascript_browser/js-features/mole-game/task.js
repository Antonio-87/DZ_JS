let dead = document.getElementById('dead');
let misses = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

for (let index = 1; index < 9; index++) {
    getHole(index).onclick = () => {
        if (getHole(index).className.includes( 'hole_has-mole' )) {
            dead.textContent = Number(dead.textContent) + 1;
        } else {
            misses.textContent = Number(misses.textContent) + 1;
        }
            
        if (dead.textContent == 10) {
            dead.textContent = 0;
            misses.textContent = 0;
            alert('Вы выграли!');
        } else if (misses.textContent == 5) {
            misses.textContent = 0;
            dead.textContent = 0;
            alert('Вы проиграли!')
        }
    };
};



