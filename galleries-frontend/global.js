const bodyElement = document.getElementsByTagName("BODY")[0];


const navElement = document.createElement("nav");

navElement.innerHTML = `
    <a href="../frontpage/index.html"><img src="../frontpage/windows_update_large-5.png" alt="logo"></a>
    <a href="../artists/artists.html">artists</a>
    <a href="../galleries/galleries.html">galleries</a>
    <a href="../paintings/paintings.html">paintings</a>
`;

bodyElement.prepend(navElement);
