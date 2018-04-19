
  document.getElementById('resetButton').addEventListener('click',() => { makeGrid()});

//draws the initial 16 x 16 grid
  for (let i = 0; i < 16 * 16; i++) {
    const gameGrid = document.querySelector('#gameContainer');
    const grid = document.createElement('div');
    grid.classList.add('grid');
    gameGrid.appendChild(grid);
    document.querySelectorAll('grid');
    grid.addEventListener('mouseover', function(e) {
    grid.classList.add('paint')
});
}

//Functions--


//resets the game and prompts the user for a numerical input for the size of the new grid.
function makeGrid() {
    let gridSize = prompt(`How many squares would you like on each axis of the new grid?`,16,)
        do {
            if (isNaN(gridSize)) {
              gridSize = prompt(`Please ensure you input a valid number!`)
            }
        } while (isNaN(gridSize))
    let elementRemove = document.getElementsByClassName('grid');
        while (elementRemove[0]) {
        elementRemove[0].parentNode.removeChild(elementRemove[0]);
        }
   
        for (let i = 0; i < gridSize * gridSize; i++) {
            const gameGrid = document.querySelector('#gameContainer');
            const grid = document.createElement('div');
            grid.classList.add('grid');
            gameGrid.appendChild(grid);
            document.body.style.setProperty('--gridSize', gridSize)
            grid.addEventListener('mouseover', function() {
            grid.classList.add('paint');
        });
    }
}

