setInterval(function () {
    document.querySelector(".loading").classList.add("entrar")
    document.querySelector(".carregado").classList.add("entrar")
    document.querySelector(".background-barriga-do-instic").classList.add("entrar")
}, 5000)



function informacao() {
    document.querySelector(".overflow").classList.add("abrir")
    document.querySelector(".informacao").classList.add("abrir")
}

function fecharInformacao() {
    document.querySelector(".overflow").classList.remove("abrir")
    document.querySelector(".informacao").classList.remove("abrir")
}

