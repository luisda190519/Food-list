const boton = document.querySelector("#boton")
const texto = document.querySelector("#input")
const contenedor = document.querySelector("#contenedor")

boton.addEventListener("click", (e) => {

    if (texto.value == "") {
        alert("No digito nada")
    } else {
        lista(texto.value)
        texto.value = ""
    }

})

const lista = function (elemento) {

    const p = document.createElement("p")
    const basura = document.createElement("img")
    const editar = document.createElement("img")

    p.innerHTML = elemento
    basura.src = "trash.svg"
    editar.src = "pen.svg"

    contenedor.append(p)
    p.append(basura)
    p.append(editar)


    basura.addEventListener("click", (e) => {
        p.remove()
        boton.innerHTML = "Submit"
        p.innerText = texto.value
        texto.value = ""
    })

    editar.addEventListener("click", (e) => {
        boton.innerHTML = "Editar"
        texto.value = p.innerText

        boton.addEventListener("click", (e) => {
            p.remove()
            boton.innerHTML = "Submit"
            p.innerText = texto.value
            texto.value = ""
        })

    })

    elemento = ""

}

const clear = document.querySelector("#clear")

clear.addEventListener("click", (e) => {

    const todosLosP = document.querySelectorAll("p")

    for (let p of todosLosP) {
        p.remove()
    }

})

