// scripts.js
document.getElementById('menu-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');

    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        content.classList.remove('shifted');
    } else {
        sidebar.classList.add('show');
        content.classList.add('shifted');
    }
});

function navigateTo(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
            document.getElementById('sidebar').classList.remove('show');
            document.getElementById('content').classList.remove('shifted');
        })
        .catch(error => {
            console.error('Error al cargar la página:', error);
        });
}
