/* =========================
   NAVEGACIÓN
========================= */

document.addEventListener("DOMContentLoaded", function () {

    let claveIngresada = "";

    const pantallas = document.querySelectorAll(".pantalla");
    const display = document.getElementById("display");


    /* =========================
       MOSTRAR PANTALLA
    ========================= */

    function mostrar(id) {

        pantallas.forEach(function (pantalla) {
            pantalla.classList.remove("activa");
        });

        const destino = document.getElementById(id);

        if (destino) {
            destino.classList.add("activa");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }


    /* =========================
       BOTÓN COMENZAR
    ========================= */

    const btnComenzar =
        document.getElementById("btnComenzar");

    if (btnComenzar) {

        btnComenzar.addEventListener(
            "click",
            function () {

                mostrar("clave");

            }
        );

    }


    /* =========================
       BOTONES DE NAVEGACIÓN
    ========================= */

    const botonesNavegacion =
        document.querySelectorAll("[data-ir]");

    botonesNavegacion.forEach(function (boton) {

        boton.addEventListener(
            "click",
            function () {

                const destino =
                    boton.getAttribute("data-ir");

                mostrar(destino);

            }
        );

    });


    /* =========================
       TECLADO NUMÉRICO
    ========================= */

    const botonesNumeros =
        document.querySelectorAll("[data-numero]");

    botonesNumeros.forEach(function (boton) {

        boton.addEventListener(
            "click",
            function () {

                if (claveIngresada.length < 4) {

                    claveIngresada +=
                        boton.getAttribute("data-numero");

                    actualizarDisplay();

                }

            }
        );

    });


    /* =========================
       ACTUALIZAR DISPLAY
    ========================= */

    function actualizarDisplay() {

        let texto = "";

        for (let i = 0; i < 4; i++) {

            if (i < claveIngresada.length) {

                texto += "●";

            } else {

                texto += "_";

            }

        }

        display.textContent = texto;

    }


    /* =========================
       BORRAR
    ========================= */

    const btnBorrar =
        document.getElementById("btnBorrar");

    if (btnBorrar) {

        btnBorrar.addEventListener(
            "click",
            function () {

                claveIngresada =
                    claveIngresada.slice(0, -1);

                actualizarDisplay();

            }
        );

    }


    /* =========================
       ENTRAR
    ========================= */

    const btnEntrar =
        document.getElementById("btnEntrar");

    if (btnEntrar) {

        btnEntrar.addEventListener(
            "click",
            function () {

                const claveCorrecta = "1007";


                if (
                    claveIngresada === claveCorrecta
                ) {

                    claveIngresada = "";

                    actualizarDisplay();

                    mostrar("menu");

                } else {

                    display.textContent = "💔";

                    setTimeout(function () {

                        claveIngresada = "";

                        actualizarDisplay();

                    }, 1000);

                }

            }
        );

    }

});
