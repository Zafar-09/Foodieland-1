let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function getSummDiagonals(matrix) {
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        primaryDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[i][matrix.length - i - 1];

    }
    return primaryDiagonal + secondaryDiagonal;
}
console.log(getSummDiagonals(matrix))

// Navbar animation in js?