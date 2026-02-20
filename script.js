const contentContainer = document.querySelector("#content");
const createGridBtn = document.createElement("button");
createGridBtn.textContent = "New Grid";
const btnContainer = document.querySelector(".btn");
btnContainer.appendChild(createGridBtn);

//contentContainer.appendChild(gridSquare);

window.onload = createGrid(16);
function createGrid(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let div = document.createElement("div");
            div.classList.add("square");
            div.style.width = `${960/n}px`;
            div.style.height = `${960/n}px`;
            contentContainer.appendChild(div);
        }
    }
}

/*
createGridBtn.addEventListener("click", () => {
    let n = prompt("Please enter a number up to 100 to create a new grid.");
    createGrid(n)
});
*/