function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var computedStyle = window.getComputedStyle(sidebar);

    if (computedStyle.width === "0px") {
        sidebar.style.width = "250px";
    } else {
        sidebar.style.width = "0px";
    }
}
function openWin(url, title, linkText) {
    // Crear la ventana emergente
    const myWindow = window.open("", "_blank", "width=400,height=300");

    // Generar el contenido HTML
    myWindow.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
                a {
                    color: blue;
                    text-decoration: underline;
                }
            </style>
        </head>
        <body>
            <a href="${url}" target="_blank">${linkText}</a>
        </body>
        </html>
    `);
}