<?php

    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $edad = $_POST["edad"];

    $data = array(
        'nombre' => $nombre,
        'apellido' => $apellido,
        'edad' => $edad,
    );

    $response = json_encode(array("user" => $data));
    echo $response;

?>