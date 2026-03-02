const contentContainer = document.querySelector("#content");
const createGridBtn = document.createElement("button");
createGridBtn.textContent = "New Grid";
const btnContainer = document.querySelector(".btn");
btnContainer.appendChild(createGridBtn);

window.onload = createGrid(16);

function createGrid(n) {
    for (let i = 0; i < (n * n); i++) {
            let div = document.createElement("div");
            div.classList.add("square");
            div.style.width = `${960/n}px`;
            contentContainer.appendChild(div);
    }
}

createGridBtn.addEventListener("click", () => {
    let newGrid = prompt("Please enter a number up to 100 to create a new grid.");
    if (newGrid > 0 && newGrid < 101) {
        reset(contentContainer);
        createGrid(newGrid);
    } else {
        alert("Error: Please choose a number between 0-100.")
    }
});

function reset(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

contentContainer.addEventListener("mouseover", (e) => {
    const hoverDiv = e.target.classList;
    if (!hoverDiv.contains("square") || hoverDiv.contains("orange")) return;
    hoverDiv.add("orange")
});