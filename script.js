var sidebarButton = document.getElementById("sidebarButton");
var menu = document.getElementById("menu");


function expandSidebar() {
    menu.classList.toggle("show");
}

function showPage(id) {
    var allPages = document.getElementsByClassName("page");
    for (var i = 0; i < allPages.length; i++) {
        allPages[i].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
    menu.classList.remove("show");
}