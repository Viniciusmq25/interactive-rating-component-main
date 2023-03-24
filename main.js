const enviar = document.querySelector(".botao")
const listaNotas = document.querySelectorAll("[data-numero]")
const container1 = document.querySelector(".container")
const container2 = document.querySelector(".container-2")
const rating = document.getElementById("rating")

enviar.addEventListener("click", () =>{
    container1.style.display = "none"
    container2.style.display = "flex"
})

listaNotas.forEach((nota) => {
    nota.addEventListener("click", () => {
        rating.innerHTML = nota.innerHTML
    })
})
