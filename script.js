let color = 'black';
let isPaintingEnabled = true;

function populateBoard(size) {
    const board = document.querySelector('.grid');
    const squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const amount = size * size;
    for (let i = 0; i < amount; i++) {
        const square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', (e) => {
            if (isPaintingEnabled) {
                if (color === 'rainbow') {
                    square.style.backgroundColor = getRandomColor();
                } else {
                    square.style.backgroundColor = color;
                }
            }
        });
        board.appendChild(square);
    }
}

function changeSize(input) {
    if (input >= 4 && input <= 80) {
        populateBoard(input);
    } else {
        console.log('Invalid grid size');
    }
}

populateBoard(16);

function togglePainting() {
    isPaintingEnabled = !isPaintingEnabled;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('black-btn').addEventListener('click', () => {
    color = 'black';
});

document.getElementById('eraser-btn').addEventListener('click', () => {
    color = 'white';
});

document.getElementById('rainbow-btn').addEventListener('click', () => {
    color = 'rainbow';
});

document.getElementById('clear-btn').addEventListener('click', () => {
    const gridSizeInput = document.getElementById('grid-size-input');
    changeSize(parseInt(gridSizeInput.value));
});

document.getElementById('set-size-btn').addEventListener('click', () => {
    const gridSizeInput = document.getElementById('grid-size-input');
    changeSize(parseInt(gridSizeInput.value));
});