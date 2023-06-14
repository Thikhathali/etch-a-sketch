const log = console.log;
let counter = null;
const elGridWrapper = document.querySelector(".grid-wrapper");
const elChangeGrid = document.querySelector("button#change-grid");
let elDivs = [];
var inputDim = 16;

const changeGrid = () => {
  reRenderGrid();
  let newInputDim = Number(prompt("Enter grid dimensions","eg, 16" +
  " ( 16 × 16 ) | min: 8 | max: 100"));
  renderGrid(newInputDim);
}

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

const renderGrid = (dim) => {
  elGridWrapper.style.gridTemplateRows = `repeat(${dim}, 1fr)`;
  elGridWrapper.style.gridTemplateColumns = `repeat(${dim}, 1fr)`;

  for(let i = 0; i < (dim * dim); i++){
    elDivs.push(document.createElement("div"));
  }

  elDivs.forEach((divs, i) => {
    divs.setAttribute("id", `id-${i}`);    
    divs.addEventListener("mouseover", changeBgColor);
    elGridWrapper.appendChild(divs);
  });
}

const reRenderGrid = () => {
  elDivs = [];
  elGridWrapper.innerHTML = "";
}

elChangeGrid.addEventListener("click", changeGrid);

renderGrid(inputDim);

