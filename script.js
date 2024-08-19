// Function to create and append a label to the document body
function print(data) {
    const chessboard = document.getElementById('chessboard');
    chessboard.innerHTML += data;
}

// Function to create a break element
function newLine() {
    print('<br>');
}

// Function to generate the chessboard
function createChessboard(board_size) {
    for (let row = 0; row < board_size; row++) {
        for (let col = 0; col < board_size; col++) {
            const isBlack = (row + col) % 2 === 0;
            const className = isBlack ? 'black' : 'white';
            print(`<span class="${className}">*</span>`);
        }
        newLine();
    }
}

// Declare the board_size and generate the chessboard
const board_size = 8; // You can change this to any size you want
createChessboard(board_size);
