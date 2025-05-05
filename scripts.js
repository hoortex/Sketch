const cont = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add(`square`);
    cont.appendChild(div);
}

const squares = document.querySelectorAll(`.square`); 

squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = "orange";
    });

    square.addEventListener('mouseleave', () => {
        square.style.backgroundColor = "";
    });
});