// -----------------MENU HAMBURGUER-----------------
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("iconeBarras")
let iconeX = document.getElementById("iconeX")
let sombra = document.getElementById("sombra")

function abreFechaMenu() {
    //Se o menu está fechado
    if (window.getComputedStyle(menu).right == "-210px") {
        //Abrir o menu
        menu.style.right = "0"

        //Mostrar icone X
        iconeX.style.display = "inline"

        //Esconde icone barras
        iconeBarras.style.display = "none"

        sombra.style.right = "0"

    } else {
        //Fechar o menu
        menu.style.right = "-210px"

        //Esconder icone X
        iconeX.style.display = "none"

        //Mostrar o icone barras
        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"
    }
}

onresize = () => {
    if (window.getComputedStyle(menu).right == "-210px") {
        //Mostra icone X
        iconeX.style.display = "none"
    } else {
        //Esconde icone barras
        iconeBarras.style.display = "inline"
    }
}


const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dot");

let index = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });
});
