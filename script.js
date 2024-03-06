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
  return;
}
 




btn.addEventListener('click', () => {

//first check if there is a grid
  const gridCheck = document.querySelectorAll('.square');
  console.log(Array.from(gridCheck));
  if (gridCheck.length > 0) {                 
    gridCheck.forEach((square)=>{             
      container.removeChild(square);
    });
  };
// get user input
  let check = false;
  let userInput;
  while (!check){   //garantee input between 0 and 100
    userInput = prompt('How many squares per side?  \n(max:100)');

    if (userInput > 0 && userInput <= 100){
      check = true;
    }
  }
  
  makeGrid(userInput);

  const grid = document.querySelectorAll('.square');
  grid.forEach((square)=>{
    square.addEventListener('mouseover', () =>{
      square.style.backgroundColor = 'black';
    })
  })
});

