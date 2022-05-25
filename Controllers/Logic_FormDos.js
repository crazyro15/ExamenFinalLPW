$(document).ready(() => {

    const urlServer = "../Services/operaciones_services.php";
    const methodServer = "post";

    $("#formulario").on("submit", () => {

        var btnCalcular = $("#btnCalcular");

        $.ajax({

            url: urlServer, 
            type: methodServer,
            data: $("#formulario").serialize(),
            success: (respuesta) => {
                const data = JSON.parse(respuesta);
                $("#resultadoCurso").html(data.operacion.curso);
                $("#resultadoComp").html(data.operacion.complejidad);
            },

            complete: () => {
                btnCalcular.removeAttr("disabled");
                $("#formulario").trigger("reset");
            },

            error: (response) => {
                console.log("Datos de error__::", response);
            }

        });

        return false;
    });

});