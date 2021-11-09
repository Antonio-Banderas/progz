const characterGalleryDiv = document.getElementById("artists-list");

fetch(baseURL + "/artists")
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

    console.log("Is name valid: " + document.getElementById("create-artist-name").validity.valid)
    if (!document.getElementById("create-artist-name").validity.valid){
        alert("Name required")
        return;
    }

    const name = document.getElementById("create-artist-name").value
    const age = document.getElementById("create-artist-age").value
    const gender = document.getElementById("create-artist-gender").value

    const newArtist = {
        name: name,
        age: Number(age),
        gender: gender
    };

    console.log(newArtist)


    fetch(baseURL + "/artists", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(newArtist)
    })
        .then(response => {
            if (response.status === 200) {
                createCharacterCard(newArtist);
            } else {
                console.log("Artist not created:", response.status);
                alert("Artist not created.\nRespone code: " +  response.status)
            }
        })
        .catch(error => alert("Network related error:\n" + error));

}