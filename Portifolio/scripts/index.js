function showme(){
    const texto = document.getElementById("container__hidden")
    if (texto.style.display === "none" || texto.style.display === ''){
        texto.style.display = "block"
    }else{
        texto.style.display = 'none'
    }
    texto.style.background = 'black'
    texto.style.color = 'white'
}
function showmenu(){
    const menu = document.getElementById("nav__container3")
    if (menu.style.display === "none" || menu.style.display === ''){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}