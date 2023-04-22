/* abre e fecha menu lateral em mobile */

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list-nested")
        ? menuMobile.classList.replace("bi-list-nested", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list-nested")
        body.classList.toggle("menu-nav-active")
});