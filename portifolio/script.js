function clickMenu(){
    var icon = document.querySelector("#icon-menu")
    if (menu.style.display == 'flex'){
        menu.style.display = 'none'
        icon.innerHTML = "Menu"
    } else {
        menu.style.display = 'flex'
        icon.innerHTML = "Close"
        /*icon.style.border = '2px solid rgba(255, 255, 255, 0.575)'*/
    }
}

function clickImg() {
    if (imgLogo.style.width == '85px'){
        imgLogo.style.width = '150px'
        /*imgLogo.style.position = 'absolute'*/
    } else {
        imgLogo.style.width = '85px'
        imgLogo.style.position = 'relative'
    }
}