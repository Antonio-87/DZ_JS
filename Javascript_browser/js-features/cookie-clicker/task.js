const t = document.getElementById("clicker__counter");
const img = document.getElementById("cookie");
const s = document.getElementById("clicker_speed");

const start = Date.now() / 1000;
img.onclick = () => {
    // t.textContent = Number(t.textContent) + 1;
    img.width = ++t.textContent%2?250:200;
    // if (t.textContent % 2 !== 0 ) {
    //     img.width += 20;
    //     img.height += 20;
    // } else {
    //     img.width -= 20;
    //     img.height -= 20;
    // }

    const end = Date.now() / 1000;
    s.textContent = (t.textContent/ (end - start)).toFixed(2);
};

    


    
