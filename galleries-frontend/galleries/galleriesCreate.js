const galleryFormParentDiv = document.getElementById("create-gallery-form");
const galleryFormExpandButton = document.getElementById("expand-gallery-form");

const createGalleryForm = `<div>
    <label>Name</label>
    <input id="create-gallery-name" placeholder="name">
    <label>Location</label>
    <input id="create-gallery-location" placeholder="location">    
    <label>Owner</label>
    <input id="create-gallery-owner" placeholder="owner">    
    <label>Square Feet</label>
    <input id="create-gallery-square-feet" placeholder="square feet">
    <button onclick="removeGalleryForm()">Cancel</button>
    <button onclick="createGallery()">Create A New (fake) Gallery</button>
</div>`;


function showGalleryForm() {
    galleryFormExpandButton.style.display = "none";
    galleryFormParentDiv.innerHTML = createGalleryForm;
}

function removeGalleryForm() {
    galleryFormExpandButton.style.display = "block";
    galleryFormParentDiv.innerHTML = "";
}

// document.getElementById("create-new-artist-button").addEventListener("click", createNewArtist);
function createGallery() {

    fetch(baseURL + "/galleries", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name: "New hardcoded gallery",
            location: "Atlantis",
            owner: "Apollo"
        })
    }).then(response => response.json())
        .then(gallery => {
            removeGalleryForm();
            createGalleryTableRow(gallery);
        });
}


document.getElementById("expand-gallery-form")
    .addEventListener("click", showGalleryForm);
