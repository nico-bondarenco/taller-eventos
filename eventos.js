document.addEventListener("DOMContentLoaded", () => {
    const divertido = document.getElementById("contenedoreishon");
    const boton = document.getElementById("boton");

    boton.addEventListener("click", (e) => {
        e.stopPropagation();
        alert("Hola!");
    })
    divertido.addEventListener("click", () => alert('Hola! Soy el div'))


})