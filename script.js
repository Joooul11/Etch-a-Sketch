const firstDiv = document.querySelector('.container');
let divs = [];

function divAdder(numSquaresPerSide) {
  firstDiv.innerHTML = '';
  divs = [];
  
  const totalSquares = numSquaresPerSide * numSquaresPerSide;
  const squareSize = 500 / numSquaresPerSide; // Assuming a container size of 500px for example

  for (let i = 0; i < totalSquares; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${squareSize}px`;
    newDiv.style.height = `${squareSize}px`;
    newDiv.className = 'grid-item';
    firstDiv.appendChild(newDiv);
    divs.push(newDiv);
  }

  // Add event listeners to each div
  divs.forEach((div) => {
    div.addEventListener('mouseover', handleMouseOver);
  });
}

function handleMouseOver(event) {
  const div = event.target;
  div.style.backgroundColor = 'black';
}

function handleMouseOut(event) {
  const div = event.target;
  div.style.backgroundColor = 'white';
}

document.querySelector('#newGridButton').addEventListener('click', () => {
  const numSquaresPerSide = prompt('Enter the number of squares per side for the new grid:');
  if (numSquaresPerSide !== null && numSquaresPerSide > 0) {
    divAdder(parseInt(numSquaresPerSide));
  }
});

// Initial grid
divAdder(4); // Default to a 4x4 grid