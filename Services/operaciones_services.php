<?php

$curso = $_POST["curso"];
$operacion = $_POST["operacion"];
$operaciones2 = $_POST["operaciones2"];
$complejidad = "";

if($operacion >=2 && $operacion <=4){
    $complejidad = "Nivel Básico";
}elseif($operacion >=6 && $operacion <=8){
    $complejidad = "Nivel Intermedio";
}elseif($operacion == 10){
    $complejidad = "Nivel avanzado";
};

// if($operacion == 2 && $operacion ==4){
//     $complejidad = "Nivel Básico";
//     }
// if($operacion == 6 && $operacion <=8){
//     $complejidad = "Nivel Intermedio";
// }
// if($operacion == 10){
//     $complejidad = "Nivel avanzado";
// };

    $data = array(
        'curso' => $curso,
        'operacion' => $operacion,
        'operaciones2' => $operaciones2,
        'complejidad' => $complejidad,
    );

    
    $response = json_encode(array("operacion" => $data));
    echo $response;

?>