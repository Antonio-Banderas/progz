const paintingsGalleryDiv = document.getElementById("paintings-list");

fetch(baseURL + "/paintings")
    .then(response => response.json())
    .then(paintings => {
        console.log(paintings)
        paintings.map(constructPaintingCard)});


document.getElementById("create-painting-button").addEventListener("click", createPainting)

function createPainting() {
    console.log("doing stuff....")
}


function constructPaintingCard(painting) {

    const cardElement = document.createElement("div")

    console.log(painting.title)
    cardElement.innerHTML = `
        <p>${escapeHTML(painting.title)}</p>
    `;

    paintingsGalleryDiv.appendChild(cardElement);

}


