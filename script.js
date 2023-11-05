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
    if(imgLogo.style.scale == 1.5){
        imgLogo.style.scale = 1
    } else {
        imgLogo.style.scale = 1.5
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
