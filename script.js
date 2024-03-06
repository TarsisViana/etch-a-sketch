const container = document.querySelector('#container');

function makeGrid(userInput){

  for (let i = 0; i < userInput*userInput ; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    let size = 600/userInput;
    square.style.height = size+'px';
    square.style.width = size+'px';
    
    container.appendChild(square);
  
  }
  return;
}

makeGrid(prompt());