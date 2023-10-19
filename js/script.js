// Creo una variabile  per il bottone
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    // numero dei quadratini
    const numSquare = 100;
    // Griglia di gioco
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    // Creo un ciclo per stampare i quadratini
    for(let i = 0; i < numSquare; i++){
        let square = drawSquare(i, numSquare);
        // Appendo i quadratini alla griglia
        grid.append(square);
    }
});

// Creo una funzione che disegni i quadratini
 function drawSquare(squareIndex,numSquare){
    // Creo una variabile che divida la griglia in 100 quadratini
    const squareWidth = Math.sqrt(numSquare);
    const square = document.createElement('div');
    square.classList.add('square');
    // Altezza e Larghezza dei quadratini
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.width = square.style.width;
    square.innerHTML = squareIndex + 1;
    // Funzione che permetta all'utente di cambiare colore del quadratino cliccandoci sopra
    square.addEventListener('click', function(){
        square.classList.add('active');
        square.style.color = 'black';
        console.log(square.textContent);
    });
      return square;
 }


