const container = document.querySelector("#container");
container.style.display =  "flex";
container.style.justifyContent = "center";

const canvas = document.createElement("div");
canvas.style.display = "flex";
canvas.style.flexDirection = "column";
canvas.style.width = "auto";
canvas.style.backgroundColor = "#e0e1e3";
canvas.style.border = "2px solid black";
canvas.style.justifyContent = "space-around";
canvas.draggable="false"

for (let i=0; i<64; i++){
    let horizontal = document.createElement("div");
    for (let j=0; j<64; j++){
        let cell = document.createElement("div");
        cell.style.backgroundColor = "#99b1e1";
        cell.style.width = "12px";
        cell.draggable="false"
        cell.addEventListener("dragover", () => {
            cell.style.backgroundColor = "#e16931";
        });
        horizontal.appendChild(cell);
    };
    horizontal.style.display = "flex";
    horizontal.style.height = "12px";
    horizontal.style.justifyContent = "space-around";
    horizontal.draggable="false"
    canvas.appendChild(horizontal);
};



container.appendChild(canvas);
