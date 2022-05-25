<?php

    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $edad = $_POST["edad"];

    $data = array(
        'nombre' => $nombre,
        'apellido' => $apellido,
        'edad' => $edad,
        'mayor' => $edad > 17 ? "(Es mayor de edad)" : "(Es menor de edad)",
    );

    $response = json_encode(array("user" => $data));
    echo $response;

?>