document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('gameBoard');
    const message = document.getElementById('message');
    const resetButton = document.getElementById('resetButton');

    const imageSize = 100; // Taille des images en pixels
    const emptyCellIndex = 8; // Indice de la cellule vide
    let cells = []; // Tableau pour stocker les cellules

    initializeGame();

    resetButton.addEventListener('click', function() {
        initializeGame();
    });

    function initializeGame() {
        cells = [];
        message.textContent = '';
        resetButton.style.display = 'none';

        // Créer les cellules
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.backgroundImage = `url('logo_la_plateforme.jpg')`;
            cell.style.backgroundPosition = `-${i % 3 * imageSize}px -${Math.floor(i / 3) * imageSize}px`;
            cell.dataset.index = i;
            cell.addEventListener('click', function() {
                moveCell(parseInt(cell.dataset.index));
            });
            cells.push(cell);
            gameBoard.appendChild(cell);
        }

        shuffleBoard();
    }

    function shuffleBoard() {
        for (let i = 0; i < 1000; i++) {
            const randomIndex = Math.floor(Math.random() * 9);
            moveCell(randomIndex);
        }
    }

    function moveCell(index) {
        const emptyCell = cells[emptyCellIndex];
        const currentCell = cells[index];
        const emptyRow = Math.floor(emptyCellIndex / 3);
        const emptyCol = emptyCellIndex % 3;
        const currentRow = Math.floor(index / 3);
        const currentCol = index % 3;

        if ((emptyRow === currentRow && Math.abs(emptyCol - currentCol) === 1) ||
            (emptyCol === currentCol && Math.abs(emptyRow - currentRow) === 1)) {
            cells[emptyCellIndex] = currentCell;
            cells[index] = emptyCell;
            gameBoard.innerHTML = '';
            cells.forEach(cell => gameBoard.appendChild(cell));
            emptyCellIndex = index;
            checkWin();
        }
    }

    function checkWin() {
        let win = true;
        cells.forEach((cell, index) => {
            if (parseInt(cell.dataset.index) !== index) {
                win = false;
            }
        });

        if (win) {
            message.textContent = 'Vous avez gagné!';
            message.style.color = 'green';
            resetButton.style.display = 'block';
        }
    }
});
