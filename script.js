function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var computedStyle = window.getComputedStyle(sidebar);

    if (computedStyle.width === "0px") {
        sidebar.style.width = "250px";
    } else {
        sidebar.style.width = "0px";
    }
}
