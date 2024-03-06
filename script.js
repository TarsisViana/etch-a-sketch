const container = document.querySelector('#container');
const btn = document.querySelector('button');

function makeGrid(userInput){

  for (let i = 0; i < userInput*userInput ; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    let size = 600/userInput;
    square.style.height = size+'px';
    square.style.width = size+'px';
    
    container.appendChild(square);
    
  }
  
}
 
makeGrid(prompt());

const grid = document.querySelectorAll('.square');
    console.log(grid)
    grid.forEach((square)=>{
      square.addEventListener('mouseover', () =>{
        square.style.backgroundColor = 'black';
      })
    })