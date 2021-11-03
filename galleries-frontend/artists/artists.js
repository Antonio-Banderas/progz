const characterGalleryDiv = document.getElementById("artists-list");

fetch("http://localhost:8080/artists")
    .then(response => response.json())
    .then(result => {
        result.map(createCharacterCard)
    });


function createCharacterCard(character) {
    const cardElement = document.createElement("div");
    console.log(character.name)

    cardElement.innerHTML = `
        <p>${escapeHTML(character.name)}</p>
    `;

    console.log(cardElement.innerText)

    characterGalleryDiv.appendChild(cardElement);
}


document.getElementById("create-new-artist-button").addEventListener("click", createNewArtist);
function createNewArtist() {

    const name = document.getElementById("create-artist-name").value
    const age = document.getElementById("create-artist-age").value
    const gender = document.getElementById("create-artist-gender").value

    const artist = {
        name: name,
        age: Number(age),
        gender: gender
    };

    console.log(artist)


    fetch("http://localhost:8080/artists", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(artist)
    })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            result.map(createCharacterCard)

            createCharacterCard(artist)

        });

}