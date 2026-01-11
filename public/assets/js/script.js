// bi bi-x-lg

const menuBtn = document.getElementById('mobile-menu-toggle');
const navItems = document.getElementById('mobile-nav-items');

menuBtn.addEventListener('click', () => {
    navItems.classList.toggle("show");

    if(menuBtn.classList.contains("bi-list")) {
        menuBtn.Btn.classList.remove("bi-list");
        menuBtn.classList.add("bi-x-lg");
    } else {
        menuBtn.classList.remove("bi-x-lg");
        menuBtn.classList.add("bi-list");
    }
});