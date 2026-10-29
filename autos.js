const lista = document.querySelector("#lista");
const selector = document.querySelector("#decada");
const mensaje = document.querySelector("#mensaje");
const tipo = lista.getAttribute("data-tipo");

function crearTarjeta(auto) {
    return `
        <div class="col-12 col-md-6 col-lg-4 aparecer">
            <div class="card tarjeta h-100 text-center">
                <img src="${auto.imagen}" class="card-img-top foto" alt="${auto.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold">${auto.nombre}</h5>
                    <div>
                        <span class="badge etiqueta mb-2">${auto.anio}</span>
                    </div>
                    <p class="card-text">${auto.resumen}</p>
                    <button class="btn boton ver mt-auto align-self-center" data-id="${auto.id}">Ver detalles</button>
                </div>
            </div>
        </div>
    `;
}

function guardarAuto(id) {

    for (let i = 0; i < autos.length; i++) {

        if (autos[i].id === id) {
            localStorage.setItem("auto", JSON.stringify(autos[i]));
            window.location.href = "detalle.html";
        }
    }
}

function activarBotones() {
    const botones = document.querySelectorAll(".ver");

    for (let i = 0; i < botones.length; i++) {

        botones[i].addEventListener("click", function () {
            guardarAuto(botones[i].getAttribute("data-id"));
        });
    }
}

function mostrarAutos() {
    const decada = selector.value;
    let tarjetas = "";
    let total = 0;

    for (let i = 0; i < autos.length; i++) {
        const auto = autos[i];
        const decadaAuto = Math.floor(auto.anio / 10) * 10;
        const mismoTipo = auto.tipo === tipo;
        const mismaDecada = decada === "todas" || decadaAuto === Number(decada);

        if (mismoTipo && mismaDecada) {
            tarjetas += crearTarjeta(auto);
            total++;
        }
    }

    lista.innerHTML = tarjetas;

    if (total === 0) {
        mensaje.classList.remove("d-none");
    } else {
        mensaje.classList.add("d-none");
    }

    activarBotones();
    setTimeout(mostrarElementos, 50);
}

selector.addEventListener("change", mostrarAutos);

mostrarAutos();