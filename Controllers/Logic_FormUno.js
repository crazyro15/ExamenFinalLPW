$(document).ready(() => {

    $("#formulario").on("submit", () => {
        
        var msgElement = $("#Resultado");
        var btnEnviar = $("#btnEnviar");

        $.ajax({

            url: $("#formulario").attr("action"),
            type: $("#formulario").attr("method"),
            data: $("#formulario").serialize(),
            
            beforeSend: () => {
                msgElement.html("Enviando los datos");
                btnEnviar.attr("disabled","disabled");
            },
            success: (response) => {
                const datos = JSON.parse(response);
                console.log(datos);
                msgElement.html(datos.user.nombre + " " + datos.user.apellido + ", edad: " + datos.user.edad + " años. " + datos.user.mayor);
            },
            complete: () => {
                btnEnviar.removeAttr("disabled");
                $("#formulario").trigger("reset");
            },
            error: (response) => {
                console.log("Datos de error__::", response);
            }
            
        });

        return false;

    });
    
});