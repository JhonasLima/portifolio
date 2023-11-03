/*-----------------------------Header----------------------*/
function clickMenu() {
    let icon = document.querySelector("#icon-menu")
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

/*-------------------------Conhecimentos-----------------*/

function clickCard() {
    if (conhecimentos.classList.contains('transicao')){
        conhecimentos.classList.remove('transicao', 'transicao2')
        iconConhecimentos.innerHTML = "add"
    } else {
        conhecimentos.classList.add('transicao')
        setTimeout(function(){
            conhecimentos.classList.add('transicao2')
        }, 500)
        iconConhecimentos.innerHTML = "remove"
    }

    var elementos = document.querySelectorAll('.conteudoCard')
    elementos.forEach(function (elemento) {
        elemento.classList.add('transicao')
        if (elemento.style.display != 'block') {
            elemento.style.display = 'block'
            containerCard.style.flexDirection = 'column'

            setTimeout(function () {

                elemento.style.opacity = 1

            }, 500)

        } else {
            elemento.style.display = 'none'
            containerCard.style.flexDirection = 'row'
            setTimeout(function () {
                elemento.style.opacity = 0
                document.getElementById("conhecimentos").focus()
            }, 500)
            
        }
    })
}

/*-----------------------------Projetos----------------*/

