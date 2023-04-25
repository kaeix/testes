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

//animar itens da tela com o .data-anime//

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {

    const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

    // se a distância da tela pro topo for maior que a distância do meu elemento, a animação será acinada// 

    item.forEach(Element => {
        if (windowTop > Element.offsetTop){
            Element.classList.add('animate');
        } else {
            Element.classList.remove("animate");
        }
    })

}

animeScroll()

window.addEventListener("scroll", ()=>{
    animeScroll();
})