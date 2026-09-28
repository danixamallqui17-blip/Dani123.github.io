// ======================================
// CONTRASEÑA
// ======================================

const CONTRASENA = "1007";

let claveIngresada = "";


// ======================================
// CAMBIAR DE PANTALLA
// ======================================

function mostrar(id) {

    document.querySelectorAll(".pantalla").forEach(seccion => {
        seccion.classList.remove("activa");
    });

    const destino = document.getElementById(id);

    if (destino) {
        destino.classList.add("activa");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (id === "menu" || id === "sorpresa") {
        lanzarCorazones();
    }
}


// ======================================
// TECLADO DE CONTRASEÑA
// ======================================

function numero(n) {

    if (claveIngresada.length < 4) {

        claveIngresada += n;

        actualizarDisplay();
    }
}


// ======================================
// BORRAR
// ======================================

function borrar() {

    claveIngresada = claveIngresada.slice(0, -1);

    actualizarDisplay();
}


// ======================================
// MOSTRAR CONTRASEÑA
// ======================================

function actualizarDisplay() {

    let texto = "";

    for (let i = 0; i < claveIngresada.length; i++) {
        texto += "●";
    }

    while (texto.length < 4) {
        texto += "_";
    }

    const display = document.getElementById("display");

    if (display) {
        display.textContent = texto;
    }
}


// ======================================
// COMPROBAR CONTRASEÑA
// ======================================

function entrar() {

    if (claveIngresada === CONTRASENA) {

        claveIngresada = "";

        actualizarDisplay();

        mostrar("menu");

        lanzarCorazones();

    } else {

        alert("La contraseña no es correcta ❤️");

        claveIngresada = "";

        actualizarDisplay();
    }
}


// ======================================
// CORAZONES ANIMADOS
// ======================================

function lanzarCorazones() {

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const corazon = document.createElement("div");

            corazon.className = "corazon";

            const corazones = [
                "❤️",
                "💛",
                "💕",
                "💖"
            ];

            corazon.textContent =
                corazones[Math.floor(Math.random() * corazones.length)];

            corazon.style.left =
                (5 + Math.random() * 90) + "vw";

            corazon.style.top =
                (65 + Math.random() * 25) + "vh";

            document.body.appendChild(corazon);

            setTimeout(() => {

                corazon.remove();

            }, 1600);

        }, i * 100);
    }
}


// ======================================
// INICIAR DISPLAY
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    actualizarDisplay();

});
