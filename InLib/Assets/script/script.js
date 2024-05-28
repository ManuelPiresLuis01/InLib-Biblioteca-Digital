function categoria() {
    document.querySelector(".nav-categorias1").classList.add("abrir")
    document.querySelector(".overflow").classList.add("abrir")

}

function fecharCategoria() {
    document.querySelector(".nav-categorias1").classList.remove("abrir")
    document.querySelector(".overflow").classList.remove("abrir")
}

function search() {
    document.querySelector(".search").classList.add("abrir")

}


/**scrip das sub categorias */

document.getElementById("livro").addEventListener("click", function () {
    document.querySelector(".LIVRO").classList.add("abrir")
})


document.getElementById("audio").addEventListener("click", function () {
    document.querySelector(".audio").classList.add("abrir")
})


document.getElementById("tese").addEventListener("click", function () {
    document.querySelector(".tese").classList.add("abrir")
})


/**script da musica */

function tocar() {
    alert("Para maior aproveitamento da musica é melhor colocar uns fones de ouvido!")
    document.getElementById("musica").play();
    document.querySelector(".ouvirmusica").classList.add("tocar")
    document.querySelector(".pausarmusica").classList.add("tocar")
}


function parar() {
    document.getElementById("musica").pause();
    document.querySelector(".ouvirmusica").classList.remove("tocar")
    document.querySelector(".pausarmusica").classList.remove("tocar")
}

/** fim do script da musica */