
// creo una funzione che generi una nuova partita
function createNewGame(){
    let cellsNumber;
    let cellsRow;

    let arrayBombs = [];

    if(difficulty.value == 'Facile'){
        cellsNumber = 100;
        cellsRow = 10;
    }
    else if(difficulty.value == 'Media'){
        cellsNumber = 81;
        cellsRow = 9;
    }
    else{
        cellsNumber = 49;
        cellsRow = 7;
    }

    arrayBombs = createBombsArray(1, cellsNumber);
    //stampo in console log l'array in ordine crescente
    console.log(arrayBombs.sort(function(a, b){return a-b}));

    generateGrid(arrayBombs, cellsNumber, cellsRow);
}
