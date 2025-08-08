document.addEventListener("DOMContentLoaded", function () {

    const isInSubfolder = window.location.pathname.includes("/pages/");

    const homeLink = isInSubfolder ? "../index.html" : "index.html";
    const noodlesPage = isInSubfolder ? "noodles.html" : "pages/noodles.html";
    const cakePage = isInSubfolder ? "cake.html" : "pages/cake.html";
    const page1 = isInSubfolder ? "page1.html" : "pages/page1.html";
    const page2 = isInSubfolder ? "page2.html" : "pages/page2.html";
    const page3 = isInSubfolder ? "page3.html" : "pages/page3.html";

    document.getElementById("sidebar").innerHTML = `
        <nav>
            <ul>
                <li><a href="${homeLink}">Home</a></li>
                <!-- <li><a href="${noodlesPage}">Noodles Page</a></li> -->
                <!-- <li><a href="${cakePage}">Cake Page</a></li> -->
                <li><a href="${page1}">Notes</a></li>
                <li><a href="${page2}">Real Analysis</a></li>
                <li><a href="${page3}">Abstract Algebra</a></li>
                <a href="../example.pdf" target="_blank">View PDF</a>
            </ul>
        </nav>
    `;
});