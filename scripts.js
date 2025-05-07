const container = document.getElementById("container");
const button = document.getElementById("newGridBtn");
let isDrawing = true;

document.body.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
      isDrawing = !isDrawing;
      updateDrawingStatus();
    }
  });

  function createGrid(size) {
    container.innerHTML = "";
    const squareSize = 960 / size;
  
    for (let i = 0; i < size * size; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      div.style.width = `${squareSize}px`;
      div.style.height = `${squareSize}px`;
  
      div.addEventListener("mouseover", () => {
        if (isDrawing) {
          div.style.backgroundColor = "#ffffff";
        }
      });
  
      container.appendChild(div);
    }
  }
  

button.addEventListener("click", () => {
  let size = prompt("Enter grid size (max 100):");
  size = parseInt(size);
  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Invalid number. Please enter a value from 1 to 100.");
  }
});

function updateDrawingStatus() {
    const statusSpan = document.getElementById("drawingStatus");
    if (isDrawing) {
      statusSpan.textContent = "ON";
      statusSpan.classList.remove("off");
    } else {
      statusSpan.textContent = "OFF";
      statusSpan.classList.add("off");
    }
  }

createGrid(16);
updateDrawingStatus();
