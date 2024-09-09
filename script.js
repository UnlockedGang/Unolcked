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
    const myWindow = window.open("", "_blank", "width=800,height=600");

    // Configurar el contenido inicial de la ventana emergente
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
                .content {
                    margin: 20px 0;
                }
            </style>
        </head>
        <body>
            <div class="content">
                <a href="${url}" id="dynamicLink" target="_self">${linkText}</a>
            </div>
            <script>
                // Al hacer clic en el enlace, se cargará el contenido del enlace en la misma ventana
                document.getElementById('dynamicLink').addEventListener('click', function(event) {
                    event.preventDefault(); // Prevenir la acción predeterminada del enlace
                    window.location.href = this.href; // Cambiar la ubicación de la ventana emergente
                });
            </script>
        </body>
        </html>
    `);
}