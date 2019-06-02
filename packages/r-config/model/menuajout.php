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


$libelle = pg_escape_string(($_POST['libelle'] == NULL) ? "" : $_POST['libelle']);
$niveau = pg_escape_string(($_POST['niveau'] == NULL) ? "0" : $_POST['niveau']);
$url = pg_escape_string($_POST['url']);
$variable_associe = pg_escape_string(($_POST['variable_associe'] == NULL) ? "" : $_POST['variable_associe']);
$icon = pg_escape_string(($_POST['icon'] == NULL) ? "" : $_POST['icon']);


//test niveau

$tab_niveau = explode("-", $niveau) ;
$tab_transition = [];
foreach ($tab_niveau as $key => $value) {
    $entier = intval($value);
    $tab_transition[] = $entier;
}
$niveau = implode("-", $tab_transition);


if ($libelle == "") {
    $sortie = array("erreur" => "oui", "notification" => "danger", "message" => "Erreur de données", "datas" => array());
    echo json_encode($sortie);
    exit();
}

$sql_insert = "insert into menu (libelle,niveau,variable_associer,icon,url) values ('$libelle','$niveau','$variable_associe','$icon','$url')";

$sortie = $postgres->insertSQL($conn, $sql_insert);

$sortie = array("erreur" => "non", "notification" => "success", "message" => "Opération terminée avec succès", "datas" => array());
echo json_encode($sortie);
