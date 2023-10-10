function clickMenu(){
    var icon = document.querySelector("#icon-menu")
    if (menu.style.display == 'flex'){
        menu.style.display = 'none'
        icon.innerHTML = "Menu"
        icon.style.border = 'none'
    } else {
        menu.style.display = 'flex'
        icon.innerHTML = "Close"
        icon.style.border = '2px solid rgba(255, 255, 255, 0.575)'
    }
}