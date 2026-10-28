const barra = document.querySelector("nav");
const subir = document.querySelector("#subir");

function mostrarElementos() {
    const elementos = document.querySelectorAll(".aparecer");

    for (let i = 0; i < elementos.length; i++) {
        const posicion = elementos[i].getBoundingClientRect().top;

        if (posicion < window.innerHeight - 40) {
            elementos[i].classList.add("visible");
        }
    }
}

function revisarScroll() {
    barra.classList.toggle("sombra", window.scrollY > 20);
    subir.classList.toggle("mostrar", window.scrollY > 300);
    mostrarElementos();
}

window.addEventListener("scroll", revisarScroll);

subir.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

revisarScroll();