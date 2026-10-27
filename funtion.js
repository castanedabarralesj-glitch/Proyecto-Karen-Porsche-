const img1 = document.querySelector("#img1");
const formulario = document.querySelector("#formulario");
const respuesta = document.querySelector("#respuesta");

img1.addEventListener("mouseover", function () {

    img1.src = img1.getAttribute("data-hover");
});

img1.addEventListener("mouseout", function () {

    img1.src = img1.getAttribute("data-original");
});

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const correo = document.querySelector("#correo").value;
    const mensaje = document.querySelector("#mensaje").value;

    if (nombre === "" || correo === "" || mensaje === "") {

        respuesta.textContent = "Llena todos los campos";
    } else {

        respuesta.textContent = "Gracias " + nombre + ", te contactaremos pronto";
        formulario.reset();
    }
});