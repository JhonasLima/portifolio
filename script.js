/*-----------------------------Header----------------------*/
function clickMenu() { /*Menu*/
    let icon = document.querySelector("#iconMenu")
    if (menuHeader.style.display == 'flex') {
        menuHeader.style.display = 'none'
        icon.innerHTML = "Menu"
    } else {
        menuHeader.style.display = 'flex'
        icon.innerHTML = "Close"
    }
}


/*-------------------------Botão Flutuante---------------*/

function clickMenuFlutuante() { /*Menu*/
    /*let icon = document.querySelector("#iconMenu")*/
    if (menuFlutuante.style.display == 'flex') {
        menuFlutuante.style.display = 'none'
        iconMenuFlutuante.innerHTML = "Menu"
    } else {
        menuFlutuante.style.display = 'flex'
        iconMenuFlutuante.innerHTML = "Close"
    }
}

/*Codigo para manter a o botão menu na tela quando rolar a pagina*/
function elementoVisivel(el){
    const rect = el.getBoundingClientRect()

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}


function elementoInvisivel(){
    var elemento = document.querySelector("#divLimite")
    let icon = document.querySelector("#iconMenu")
    if(!elementoVisivel(elemento)){
        botaoFlutuante.style.display = 'flex'
        menuHeader.style.display = 'none'
        botaoFlutuante.classList.add('transicaoBtnFlutuante')
        icon.innerHTML = 'Menu'
        setTimeout(function(){
            botaoFlutuante.style.scale = '1'
        }, 1)
        
        /*menu.style.top = '36%'
        menu.style.right = '5%'
        menu.style.position = 'fixed'
        menu.style.width = '46%'
        
        iconMenu.style.top = '50%'
        iconMenu.style.right = '1%'
        iconMenu.style.position = 'fixed'
        iconMenu.style.width = '40px'*/

    } else {
        menuFlutuante.style.display = 'none'
        botaoFlutuante.classList.remove = 'transicaoBtnFlutuante'
        botaoFlutuante.style.scale = '0'
        botaoFlutuante.style.transition = 'scale 0.3s ease-in'
        iconMenuFlutuante.innerHTML = "Menu"
    }

}

window.addEventListener('scroll', elementoInvisivel)

/*-------------------------------------------------------------------------*/

function clickImg() {
    if(imgLogo.style.scale == 1.6){
        imgLogo.style.scale = 1
        imgLogo.style. transform = 'translate(0)'
        setTimeout(function(){
            nomePerfil.style.scale = 1
        }, 500)
    } else {
        imgLogo.style.scale = 1.6
        imgLogo.style.transform = 'translate(100%, 10px)'
        nomePerfil.style.scale = 0
    }

    /*if (imgLogo.style.width == '150px') {
        imgLogo.style.width = '85px'
    } else {
        imgLogo.style.width = '150px'
    }*/
}

/*-------------------------Conhecimentos-----------------*/

function clickCard() {
    if (conhecimentos.classList.contains('transicao')) {
        conhecimentos.classList.remove('transicao', 'transicao2')
        iconConhecimentos.innerHTML = "add"
    } else {
        conhecimentos.classList.add('transicao')
        setTimeout(function () {
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

            /*função de focar no começo da section conhecimentos quando abrir os card*/
            document.getElementById('conhecimentos').scrollIntoView({ behavior: "smooth", block: "start" })

            setTimeout(function () {

                elemento.style.opacity = 1

            }, 500)

        } else {
            elemento.style.display = 'none'
            containerCard.style.flexDirection = 'row'

            document.getElementById('conhecimentos').scrollIntoView({ behavior: "smooth", block: "center" })

            setTimeout(function () {

                elemento.style.opacity = 0

            }, 500)
        }
    })
}

/*-----------------------------Projetos----------------*/

var projetos = [
    {
        img: "imagens/ProjetoAndroid.png", nome: "Mascote Android", descricao: "Projeto android conta um pouco da história de como surgiu o mascote Android. Foi desenvolvido acompanhando o curso de HTML e CSS da plataforma CursoemVideo."
        , link: "https://jhonaslima.github.io/projeto-android/"
    },
    {
        img: "imagens/ProjetoLogin.png", nome: "Projeto Login", descricao: "Projeto desenvolvido para aprendizado, aplicando Media Query e validações simples de campos de formulário acompanhando o curso de HTML e CSS do CursoemVideo", link: "https://jhonaslima.github.io/projeto-login/index.html"
    },
    {
        img: "imagens/ProjetoVerificadorIdade.png", nome: "Verficador de Idade", descricao: "Exercicio desenvolvido no Curso de JavaScript da Plataforma CursoemVideo.", link: "https://jhonaslima.github.io/CursoJs/aula12ex/ex015/modelo.html"
    },
    {
        img: "imagens/ProjetoSocial.png", nome: "Projeto Midia Social", descricao: "Projeto desenvolvido com o intuido de aprender modos de trabalhar com iframe, foi desenvolvido acompanhando o curso de HTML e CSS do CursoemVideo", link: "https://jhonaslima.github.io/projeto-social/"
    }
]

var indice = 0

window.addEventListener('load', function(){
    adicionar()
})

function adicionar() {
    var imgProjeto = document.querySelector("#imagemProjeto")
    var nomeProjeto = document.querySelector("#nomeProjeto")
    var descricaoProj = document.querySelector("#txtdecProjeto")
    var linkProjeto = document.querySelector("#linkProjeto")

    imgProjeto.src = projetos[indice].img
    nomeProjeto.innerHTML = projetos[indice].nome
    descricaoProj.innerHTML = projetos[indice].descricao
    linkProjeto.href = projetos[indice].link
}

function btnPassar() {
    var efeitoBtn = document.querySelector("#btn-passar")
    if (indice < projetos.length - 1) {
        indice++
        console.log(indice)
    } else {
        indice = 0
    }

    /* efeito */
    efeitoBtn.classList.add('transicaoBtn')
    setTimeout(function(){
        efeitoBtn.classList.remove('transicaoBtn')
    }, 150)

    return adicionar()
    
}

function btnVoltar() {

    let efeitoBtn = document.querySelector("#btn-voltar")

    if (indice > 0) {
        indice--
    } else {
        indice = projetos.length -1 
    }

    /* efeito */
    efeitoBtn.classList.add('transicaoBtn')
    setTimeout(function(){
        efeitoBtn.classList.remove('transicaoBtn')
    }, 150)

    return adicionar()
}
