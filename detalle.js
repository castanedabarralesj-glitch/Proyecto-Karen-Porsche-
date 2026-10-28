const mensaje = document.querySelector("#mensaje");
const detalle = document.querySelector("#detalle");
const imagen = document.querySelector("#imagen");
const titulo = document.querySelector("#titulo");
const anio = document.querySelector("#anio");
const descripcion = document.querySelector("#descripcion");
const volver = document.querySelector("#volver");

const datos = localStorage.getItem("auto");

if (datos === null) {
    mensaje.classList.remove("d-none");
    detalle.classList.add("d-none");
} else {
    const auto = JSON.parse(datos);

    imagen.src = auto.imagen;
    imagen.alt = auto.nombre;
    titulo.textContent = auto.nombre;
    anio.textContent = auto.anio;
    descripcion.textContent = auto.descripcion;
    volver.href = auto.tipo + ".html";
}

imagen.addEventListener("mouseover", function () {
    imagen.classList.add("acercar");
});

imagen.addEventListener("mouseout", function () {
    imagen.classList.remove("acercar");
});