const log = console.log;
let counter = null;
const elGridWrapper = document.querySelector(".grid-wrapper");
let elDivs = [];

let inputDim = prompt("Enter grid dimensions","eg, 16 ( 16 × 16 )");

inputDim = Number.parseInt(inputDim);

const changeBgColor = (e) => {
  let selectedTile = e.target;
  const selectedMode = document.querySelector(".modes");

  const colors = () => {
    const RANDOM = Math.floor(Math.random() * 3);
    const arr = ["red", "green", "blue"];
    selectedTile.style.backgroundColor = arr[RANDOM];
  }

  const gradient = () => {
    selectedTile.style.backgroundColor = `rgba(0, 0, 0, 
      ${counter += 0.1})`;
      if(counter >= 1.0) counter = null;
  }
  
  if (selectedTile.style.backgroundColor === "rgb(255, 255, 255)") {
    switch(selectedMode.value){
      case 'gradient':
          gradient();
        break;
      case 'rgb':
          colors();
        break;
      default: 
          selectedTile.style.backgroundColor = "#f2f2f2";
    }
  } else {
    selectedTile.style.backgroundColor = "#fff";
  }
}

elGridWrapper.style.gridTemplateRows = `repeat(${inputDim}, 1fr)`;
elGridWrapper.style.gridTemplateColumns = `repeat(${inputDim}, 1fr)`;

for(let i = 0; i < (inputDim * inputDim); i++){
  elDivs.push(document.createElement("div"));
}

elDivs.forEach((divs, i) => {
  divs.setAttribute("id", `id-${i}`);    
  // divs.textContent = "div " + (i + 1);  
  divs.addEventListener("mouseover", changeBgColor);
  elGridWrapper.appendChild(divs);
});

