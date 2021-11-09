// Backend baseURL
const baseURL = "http://localhost:8080";

// this creates the same nav on every page
const BODY_ELEMENT = document.getElementsByTagName("BODY")[0];
const navElement = document.createElement("nav");

navElement.innerHTML = `
    <a href="../frontpage/index.html"><img src="../frontpage/windows_update_large-5.png" alt="logo"></a>
    <a href="../artists/artists.html">Artists</a>
    <a href="../galleries/galleries.html">Galleries</a>
    <a href="../paintings/paintings.html">Paintings</a>
`;

BODY_ELEMENT.prepend(navElement);

//TODO spørg anders open tag create-element til link

/*
// this creates a favicon on every <head> element
const HEAD_ELEMENT = document.getElementsByTagName("HEAD")[0]
const favicon = document.createElement("link")
const favicon = document.create

favicon.innerText = "rel=\"icon\" href=\"/images/favicon.ico\""

HEAD_ELEMENT.appendChild(favicon);
*/