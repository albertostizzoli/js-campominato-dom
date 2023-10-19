//creo una funzione per fare una nuova partita
function createNewGame() {
    let cellsNumber;
    let cellsRow;

    let arrayBombs = [];

    if (difficulty.value == 'Facile') {
        cellsNumber = 100;
        cellsRow = 10;
    }
    else if (difficulty.value == 'Media') {
        cellsNumber = 81;
        cellsRow = 9;
    }
    else {
        cellsNumber = 49;
        cellsRow = 7;
    }

    arrayBombs = createBombsArray(1, cellsNumber);
    //stampo in console log l'array in ordine crescente
    console.log(arrayBombs.sort(function (a, b) { return a - b }));

    generateGrid(arrayBombs, cellsNumber, cellsRow);
}

// creo una funzione per generare la griglia dinamica
function generateGrid(arrayBombs, cellsNumber, cellsRow) {

    // se è già presente un contenitore lo cancello
    container.innerHTML = "";
    const grid = document.createElement('div');
    grid.classList.add('grid');
    let count = 0;
    let square_save = cellsNumber - arrayBombs.length;

    // creo un array per le celle dove è presente la bomba
    const totalBombs = document.getElementsByName('bomb');
    for (let i = 1; i <= cellsNumber; i++) {
        const square = generateSquare(i, cellsRow, arrayBombs);

        //aggiungo alla griglia ogni singolo quadrato generato
        grid.appendChild(square);

        square.addEventListener('click', function () {
            this.classList.add('checked');

            //controllo se il numero della cella è presente nell'array delle bombe
            if (arrayBombs.includes(parseInt(this.innerText))) {
                this.classList.add('checked-bomb');
                this.innerHTML = `<i class="fa-solid fa-bomb fa-shake"></i>`;

                // blocco eventi per le altre celle nella griglia
                grid.classList.add('event-none');
                const box = createAlertMessage(count, square_save);
                box_message.appendChild(box);
                box.addEventListener('click', function () {
                    box_message.style.display = 'none';
                    revealBombs(totalBombs);
                })
            }
            else {
                count++;
            }
            if (count == square_save){
                const box = createAlertMessage(count, square_save);
                box_message.appendChild(box);
                box.addEventListener('click', function(){
                    box_message.style.display = 'none';
                });
                grid.classList.add('event-none');
            }
        });
    }

    // aggiungo al container la griglia generata
    container.appendChild(grid);
}

// creo un array di numeri casuali
function createBombsArray(min, max){
    let i = 0;
    let arrayBombs = [];

    while(i < 16){
        let number = Math.floor(Math.random() * (max - min + 1) + min);

        //aggiungo numeri univoci
        if(!(arrayBombs.includes(number))){
            arrayBombs.push(number);
            i++;
        }
    }
    return arrayBombs;
}

