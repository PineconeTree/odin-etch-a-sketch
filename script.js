const container = document.getElementById("etch-a-sketch-container");


document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
});

document.getElementById("change-grid").addEventListener("click", () => {
    container.innerHTML = "";
    const size = parseInt(prompt("Enter the number of squares per side (1-100):"));
    if (size > 100) {
        alert("Please enter a number less than or equal to 100.");
        return;
    } else if (size < 1) {
        alert("Please enter a number greater than or equal to 1.");
        return;
    }
    createGrid(size);
});

function createGrid(size) {
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.color = "black";

    //column items
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.flexDirection = "row";
        row.id = `row-${i}`;
        container.appendChild(row);

        //row items
        for (let j = 0; j < size; j++) {
            const div = document.createElement("div");
            div.style.width = "4px";
            div.style.height = "4px";
            div.id = `div-${i}-${j}`;

            div.addEventListener("mouseenter", () => {
                let color = Math.floor(Math.random()*16777215).toString(16);
                div.style.backgroundColor = `#${color}`;
                let currentOpacity = parseFloat(div.style.opacity) || 0;
                if (currentOpacity < 1) {
                    div.style.opacity = currentOpacity + 0.1;
                }
            });

            row.appendChild(div);
        }
    }
}

