function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var isSidebarOpen = sidebar.style.width === "250px";

    sidebar.style.width = isSidebarOpen ? "0" : "250px";
}

function openWin(encryptedUrl, title) {
    // Desencriptar la URL
    const url = atob(encryptedUrl); // Convierte de Base64 a texto original

    // Abrir una nueva ventana
    const myWindow = window.open("", "_blank", "width=800,height=600");

    // Cargar contenido de forma retardada para evitar análisis inmediatos
    setTimeout(() => {
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
                    <a href="${url}" id="dynamicLink" target="_self">${title}</a>
                </div>
                <script>
                    // Redirigir al URL real tras un breve retraso
                    document.getElementById('dynamicLink').addEventListener('click', function(event) {
                        event.preventDefault();
                        setTimeout(() => {
                            window.location.href = this.href;
                        }, 500);  // Agregar un retraso de 500ms
                    });
                </script>
            </body>
            </html>
        `);
    }, 1000);  // Retraso de 1 segundo para reducir la detección de análisis automáticos
}
