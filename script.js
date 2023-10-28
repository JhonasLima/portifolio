function clickMenu() {
    var icon = document.querySelector("#icon-menu")
    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
        icon.innerHTML = "Menu"
    } else {
        menu.style.display = 'flex'
        icon.innerHTML = "Close"
        /*icon.style.border = '2px solid rgba(255, 255, 255, 0.575)'*/
    }
}

function clickImg() {
    if (imgLogo.style.width == '150px') {
        imgLogo.style.width = '85px'
    } else { 
        imgLogo.style.width = '150px'
    }
}

function clickCard() {
    var elementos = document.querySelectorAll('.conteudoCard')
    
    elementos.forEach(function(elemento){
    if (elemento.style.display == 'block'){
        elemento.style.display = 'none'
        containerCard.style.flexDirection = 'row'
    } else {
        elemento.style.display = 'block'
        containerCard.style.flexDirection = 'column'
    }})
}