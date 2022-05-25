$(document).ready(() => {

    $("#linkFormUno").click(() => {
        onCargarFormularioUno();
    });

    $("#linkFormDos").on("click", () => {
        onCargarFormularioDos();
    });

    onCargarFormularioUno();

});

//Son funciones globales
const onCargarFormularioUno = () => {
    $.get("../views/FormularioUno.html", (response) => {
        $("#contenedor").html(response);
    });
}

const onCargarFormularioDos = () => {
    $.get("../views/FormularioDos.html", (response) => {
        $("#contenedor").html(response);
    });
}

