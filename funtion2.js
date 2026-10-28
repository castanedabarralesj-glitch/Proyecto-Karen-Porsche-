const aviso = document.querySelector("#aviso");
const contenidoAuto = document.querySelector("#contenidoAuto");
const imagenAuto = document.querySelector("#imagenAuto");
const nombreAuto = document.querySelector("#nombreAuto");
const anioAuto = document.querySelector("#anioAuto");
const descripcionAuto = document.querySelector("#descripcionAuto");
const botonVolver = document.querySelector("#botonVolver");

const datos = localStorage.getItem("autoElegido");

if (datos === null) {

    aviso.classList.remove("d-none");
    contenidoAuto.classList.add("d-none");
} else {

    const auto = JSON.parse(datos);

    imagenAuto.src = auto.imagen;
    imagenAuto.alt = auto.nombre;
    nombreAuto.textContent = auto.nombre;
    anioAuto.textContent = auto.anio;
    descripcionAuto.textContent = auto.descripcion;

    botonVolver.href = auto.tipo + ".html";
}