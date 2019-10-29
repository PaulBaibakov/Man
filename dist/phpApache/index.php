<?php
$responseJson_str = file_get_contents('php://input'); 
$responseJson = '[' . $responseJson_str . ']'; 
$response = json_decode($responseJson, true); // преобразование строки в формате json в ассоциативный массив 
$tt = $response[0]['SQLcommand'];
echo $tt;
?>