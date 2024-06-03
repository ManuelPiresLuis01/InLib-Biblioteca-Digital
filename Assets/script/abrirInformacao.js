setTimeout(function () {
    alert("o presente site, é apenas uma demonstração do que é usado nas unidades organicas da universidade de Luanda. Os livros presentes são apenas imagens, e será impossivel ter os dados sem estar presente em uma unidade organica e estar conectado a rede da mesma!")
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

