function updateGallery(gallery) {

    const tableRowToUpdate = document.getElementById(gallery.id)

    tableRowToUpdate.innerHTML = `
            <td>
                <input id="update-gallery-name-${gallery.id}" value="${escapeHTML(gallery.name)}">
            </td>
            <td>
                <input id="update-gallery-location-${gallery.id}" value="${escapeHTML(gallery.location)}">
            </td>
            <td>
                 <input id="update-gallery-owner-${gallery.id}" value="${escapeHTML(gallery.owner)}">
            </td>
            <td>
              <input id="update-gallery-squarefeet-${gallery.id}" type="number" value="${escapeHTML(gallery.squareFeet.toString())}">
            </td>           
            <td>
                <button id="cancel-update-${gallery.id}">❓</button>            
                <button onclick="updateGalleryInBackend(${gallery.id})">update</button>            
            </td> 
            <td>
                <button onclick="deleteGallery(${gallery.id})">❌</button>            
            </td>
        `;

    document.getElementById(`cancel-update-${gallery.id}`)
        .addEventListener("click", () => undoUpdate(gallery))
}

function undoUpdate(gallery){
    const galleryTableRow = document.getElementById(gallery.id)

    constructGalleryTableRow(galleryTableRow, gallery)

    document.getElementById(`update-button-${gallery.id}`)
        .addEventListener("click", () => updateGallery(gallery));

}

function updateGalleryInBackend(galleryId){

    // get values

    const tableRowToUpdate = document.getElementById(galleryId)

    const galleryToUpdate = {
        name: document.getElementById(`update-gallery-name-${galleryId}`).value,
        location: document.getElementById(`update-gallery-location-${galleryId}`).value,
        owner: document.getElementById(`update-gallery-owner-${galleryId}`).value,
        squarefeet: document.getElementById(`update-gallery-squarefeet-${galleryId}`).value

    }

    // fetch with patch/put?


    fetch(baseURL + "/galleries/" + galleryId, {
        method: "PATCH",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(galleryToUpdate)
    }).then(response => {
        if (response.status === 200) {
            console.log("you did ittt!!!")
            constructGalleryTableRow(tableRowToUpdate, galleryToUpdate)
        } else {
            console.log(response.status);
        }
    });
}