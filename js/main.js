const log = console.log;
let counter = null;
const elGridWrapper = document.querySelector(".grid-wrapper");
const elGridWrapperDivs = document.querySelector(".grid-wrapper > div");
const elChangeGrid = document.querySelector("button#change-grid");
const elGridVisible = document.querySelector("#grid-visible");
const elEraseImg = document.querySelector(".config > img");

const elInfo = document.querySelector(".info");
let elPTag = elInfo.lastChild.previousSibling;
let elDivInfo = elInfo.firstChild.nextSibling;

let elDivs = [];
var inputDim = 16;

const showInfo = () => {
  setTimeout(() => {
    elInfo.style.transform = "translateY(200px)";
  }, 1000);

  elInfo.style.transform = "translateY(0)";
}

const changeGrid = () => {
  reRenderGrid();
  elGridVisible.style.color = "#000";

  let newInputDim = Number(prompt("Enter Grid Dimensions","eg, 16" +
  " ( 16 × 16 ) | Min: 8 | Max: 100"));

  if(!Number(newInputDim) || newInputDim < 8 || newInputDim > 100) {
    showInfo();
    elPTag.style.color = "#fff";
    elPTag.textContent = "Enter a valid number!";
    renderGrid(inputDim);
    return;
  } 

  showInfo();
  elInfo.classList.add("success");
  elDivInfo.style.color = "green";
  elPTag.textContent = "Grid has been loaded!";

  setTimeout(() => {
    elInfo.classList.remove("success");
    elDivInfo.style.color = "rgb(196, 196, 196)";
  }, 2000);

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
          selectedTile.style.backgroundColor = "#b5b5b5";
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
    divs.addEventListener("mouseenter", changeBgColor);
    elGridWrapper.appendChild(divs);
  });
}

const reRenderGrid = () => {
  elDivs = [];
  elGridWrapper.innerHTML = "";
}

const divIterate = (grid, border) => {
  let counter = 0;
  while( counter < grid.length) {
    grid[counter].style.border = border;
    counter++;
  }
}

const eraseGrid = () => {
  elDivs.map(divs => divs.style.backgroundColor = "#fff");
}

elEraseImg.addEventListener("click", eraseGrid);
elChangeGrid.addEventListener("click", changeGrid);

elGridVisible.addEventListener("click", (e) => {
  if(e.target.style.color === "grey"){
      e.target.style.color = "black"
      divIterate(elGridWrapper.children, "");
  }else {
    e.target.style.color = "grey"
    divIterate(elGridWrapper.children, ".1em solid #b5b5b5");
  }
});

renderGrid(inputDim);