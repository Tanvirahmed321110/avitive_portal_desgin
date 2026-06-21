const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

function openSidebar() {
    sidebar?.classList.add("active");
    overlay?.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeSidebar() {
    sidebar?.classList.remove("active");
    overlay?.classList.remove("active");
    document.body.style.overflow = "auto";
}

function toggleSidebar() {
    if (sidebar?.classList.contains("active")) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

menuToggle?.addEventListener("click", toggleSidebar);
overlay?.addEventListener("click", closeSidebar);

document.querySelectorAll(".sidebar .menu a").forEach(function (link) {
    link?.addEventListener("click", closeSidebar);
});