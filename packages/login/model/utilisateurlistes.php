<?php

/**
 * Default
 * 
 * 
 * @package    
 * @subpackage Controller
 * @author     YOUR NAME <YOUREMAIL@jouve.com>
 */
include '../../../config/autoload.php';

//BDD
$postgres = new connexion();
$conn = $postgres->connect();

//var_dump($_POST);



$sql = "select * from utilisateur u order by u.matricule";

$dataOut = $postgres->getSQL($conn, $sql);


if (count($dataOut) > 0 && isset($dataOut) && is_array($dataOut)) {
    //var_dump($dataOut);
    $tab_sortie = array("verification" => TRUE, 'data' => $dataOut);
    echo json_encode($dataOut);
} else {
    $tab_sortie = array("verification" => FALSE);
    echo json_encode($tab_sortie);
} 