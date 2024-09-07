// Función para encriptar un enlace (Base64 en este ejemplo)
function encryptLink(url) {
    return btoa(url);  // Encriptación usando Base64
}

// Función para desencriptar un enlace
function decryptLink(encryptedUrl) {
    return atob(encryptedUrl);  // Desencriptación usando Base64
}

// Función para verificar si un enlace es externo
function isExternalLink(url) {
    return url.startsWith("http://") || url.startsWith("https://");
}

// Función para abrir o cerrar el menú lateral (sidebar)
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var isSidebarOpen = sidebar.style.width === "250px";

    // Encriptar solo enlaces externos al abrir el sidebar
    if (!isSidebarOpen) {
        var links = sidebar.getElementsByTagName('a');
        for (var i = 0; i < links.length; i++) {
            if (isExternalLink(links[i].href) && links[i].dataset.encrypted !== "true") {
                links[i].href = encryptLink(links[i].href);
                links[i].dataset.encrypted = "true";  // Marca el enlace como encriptado
            }
        }
    }

    // Abrir o cerrar el sidebar
    sidebar.style.width = isSidebarOpen ? "0" : "250px";
}

// Función para abrir una ventana emergente con el enlace desencriptado
function openWin(encryptedUrl, title) {
    const decryptedUrl = decryptLink(encryptedUrl);  // Desencriptar el enlace antes de usarlo
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
                    <a href="${decryptedUrl}" id="dynamicLink" target="_self">${title}</a>
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
