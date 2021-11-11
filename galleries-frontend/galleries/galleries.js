const galleriesTableBody = document.getElementById("galleries-tbody");

fetch(baseURL + "/galleries")
    .then(response => response.json())
    .then(galleries => {
        galleries.map(createGalleryTableRow);
    });

function createGalleryTableRow(gallery) {
    const galleryTableRow = document.createElement("tr");
    galleryTableRow.id = gallery.id;


    constructGalleryTableRow(galleryTableRow, gallery)
    console.log("created gallery with id: " + gallery.id)


    galleriesTableBody.appendChild(galleryTableRow);

    document.getElementById(`update-button-${gallery.id}`)
        .addEventListener("click", () => updateGallery(gallery));
}

function constructGalleryTableRow(galleryTableRow, gallery){

    galleryTableRow.innerHTML = `
            <td>
                <a href="../gallery/gallery.html?galleryId=${gallery.id}">
                    <p class="row-gallery-name">${escapeHTML(gallery.name)}</p>
                </a>
            </td>
            <td>
                <p class="row-gallery-location">${escapeHTML(gallery.location)}</p>
            </td>
            <td>
                <p class="row-gallery-owner">${escapeHTML(gallery.owner)}</p>
            </td>
            <td>
                <p class="row-gallery-squarefeet">${escapeHTML(gallery.squareFeet.toString())}</p>
            </td>           
            <td>
                <button id="update-button-${gallery.id}">🔧</button>                    
            </td> 
            <td>
                <button onclick="deleteGallery(${gallery.id})">❌</button>            
            </td>
        `;

}

function deleteGallery(galleryId) {
    console.log("fetching: " + baseURL + "/galleries/" + galleryId)
    fetch(baseURL + "/galleries/" + galleryId, {
        method: "DELETE"
    }).then(response => {
        if (response.status === 200) {
            document.getElementById(galleryId).remove();
        } else {
            console.log(response.status);
        }
    });
}
