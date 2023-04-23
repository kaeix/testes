/* abre e fecha menu lateral em mobile */

const menuMobile = document.querySelector(".menu-mobile");
const body = document.querySelector("body");

menuMobile.addEventListener("click", () => {
    menuMobile.classList.contains("bi-list-nested")
        ? menuMobile.classList.replace("bi-list-nested", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list-nested")
        body.classList.toggle("menu-nav-active")
});

/* Fecha o menu quando clica e muda icone para list */

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list-nested")
        }
    })
})