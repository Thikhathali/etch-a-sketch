const log = console.log;
let counter = null;
const elGridWrapper = document.querySelector(".grid-wrapper");
let elDivs = [];

let inputDim = prompt("Enter grid dimensions","eg, 16 × 16");

inputDim = Number.parseInt(inputDim);

log(typeof(inputDim));

const colors = () => {
  const arr = ["red", "green", "blue"];
  return arr[Math.floor(Math.random() * 3)];
}

const changeBgColor = (e) => {
  let selectedTile = e.target;
  
  if (selectedTile.style.backgroundColor === "rgb(255, 255, 255)") {
    selectedTile.style.backgroundColor = "#f2f2f2";
    // selectedTile.style.backgroundColor = colors();
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
  divs.textContent = "div " + (i + 1);  
  divs.addEventListener("mouseover", changeBgColor);
  elGridWrapper.appendChild(divs);
});

