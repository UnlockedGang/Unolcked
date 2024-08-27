function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var computedStyle = window.getComputedStyle(sidebar);

    if (computedStyle.width === "0px") {
        sidebar.style.width = "250px";
    } else {
        sidebar.style.width = "0px";
    }
}
function openwin(url) {
    window.open(url, "_blank", "width=600,height=400");
}
function openWin(title, content, imgUrl) {
    const popup = window.open("", "_blank", "width=600,height=400");

    // Crear el contenido de la ventana emergente
    popup.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>` + title + `</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                h2 {
                    color: #333;
                }
                p {
                    font-size: 16px;
                }
                img {
                    width: 100%;
                    height: auto;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <h2>` + title + `</h2>
            <p>` + content + `</p>
            <img src="` + imgUrl + `" alt="Imagen">
        </body>
        </html>
    `);
}
