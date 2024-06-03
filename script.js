const firstDiv = document.querySelector('.container');
let divs = [];

function divAdder(numSquaresPerSide) {
  firstDiv.innerHTML = '';
  divs = [];
  
  const totalSquares = numSquaresPerSide * numSquaresPerSide;
  const squareSize = 500 / numSquaresPerSide; // Assuming a container size of 500px for example

  for (let i = 0; i < totalSquares; i++) {
    const newDiv = document.createElement('div');
    newDiv.style.width = `${squareSize-2}px`;
    newDiv.style.height = `${squareSize-2}px`;
    newDiv.className = 'grid-item';
    firstDiv.appendChild(newDiv);
    divs.push(newDiv);
  }

  // Add event listeners to each div
  divs.forEach((div) => {
    div.addEventListener('mouseover', handleMouseOver);
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function handleMouseOver(event) {
  const div = event.target;
  div.style.backgroundColor = getRandomColor();
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