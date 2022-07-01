document.body.onload = createGrid;

function createGrid () {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode('it actually works');
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv,currentDiv);
}

repeat(createGrid);