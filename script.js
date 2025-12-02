//MENU HAMBURGUER
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("iconeBarras")
let iconeX = document.getElementById("iconeX")
let sombra = document.getElementById("sombra")

function abreFechamenu() {
    // se o menu está fechado 
    if (window.getComputedStyle(menu).right == "-210px") {
        menu.style.right = "0"
        //mostrar o X
        iconeX.style.display = "inline"
        // Esconde as barras
        iconeBarras.style.display = "none"

        sombra.style.right = "0"

    } else {
        //Fechar o menu
        menu.style.right = "-210px"

        menu.style.display = "none"
        //Mostrar o icone barras
        iconeBarras.style.display = "inline"
        sombra.style.right = "-101vw"
    }


    
}