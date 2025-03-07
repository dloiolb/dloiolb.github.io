document.addEventListener("DOMContentLoaded", function () {

    const isInSubfolder = window.location.pathname.includes("/pages/");

    const homeLink = isInSubfolder ? "../index.html" : "index.html";
    const noodlesPage = isInSubfolder ? "noodles.html" : "pages/noodles.html";
    const cakePage = isInSubfolder ? "cake.html" : "pages/cake.html";

    document.getElementById("sidebar").innerHTML = `
        <nav>
            <ul>
                <li><a href="${homeLink}">Home</a></li>
                <li><a href="${noodlesPage}">Noodles Page</a></li>
                <li><a href="${cakePage}">Cake Page</a></li>
                <a href="../example.pdf" target="_blank">View PDF</a>
            </ul>
        </nav>
    `;
});