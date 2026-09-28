const CONTRASENA = "1007";

let claveIngresada = "";

function mostrar(id) {
    document.querySelectorAll(".pantalla").forEach(function(seccion) {
        seccion.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");

    window.scrollTo(0, 0);
}

function numero(n) {

    if (claveIngresada.length < 4) {
        claveIngresada += n;
        actualizarDisplay();
    }
}

function borrar() {

    claveIngresada = claveIngresada.slice(0, -1);

    actualizarDisplay();
}

function actualizarDisplay() {

    let texto = "";

    for (let i = 0; i < claveIngresada.length; i++) {
        texto += "●";
    }

    while (texto.length < 4) {
        texto += "_";
    }

    document.getElementById("display").textContent = texto;
}

function entrar() {

    if (claveIngresada === CONTRASENA) {

        claveIngresada = "";

        actualizarDisplay();

        mostrar("menu");

    } else {

        alert("La contraseña no es correcta ❤️");

        claveIngresada = "";

        actualizarDisplay();
    }
}
