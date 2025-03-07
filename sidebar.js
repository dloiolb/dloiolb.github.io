document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sidebar").innerHTML = `
        <nav>
            <ul>
                <li><a href="../folder/index.html">Home</a></li>
                <li><a href="../pages/noodles.html">Noodles Page</a></li>
                <li><a href="../pages/cake.html">Cake Page</a></li>
                <a href="../example.pdf" target="_blank">View PDF</a>
            </ul>
        </nav>
    `;
});