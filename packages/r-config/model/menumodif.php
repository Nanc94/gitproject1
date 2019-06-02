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


$id = pg_escape_string($_POST['id']);
$libelle = pg_escape_string(($_POST['libelle'] == NULL) ? "" : $_POST['libelle']);
$niveau = pg_escape_string(($_POST['niveau'] == NULL) ? "0" : $_POST['niveau']);
$url = pg_escape_string($_POST['url']);
$variable_associe = pg_escape_string(($_POST['variable_associer'] == NULL) ? "" : $_POST['variable_associer']);
$icon = pg_escape_string(($_POST['icon'] == NULL) ? "" : $_POST['icon']);

if ($libelle == "") {
    $sortie = array("erreur" => "oui", "notification" => "danger", "message" => "Erreur de données", "datas" => array());
    echo json_encode($sortie);
    exit();
}

//test niveau

$tab_niveau = explode("-", $niveau) ;
$tab_transition = [];
foreach ($tab_niveau as $key => $value) {
    $entier = intval($value);
    $tab_transition[] = $entier;
}
$niveau = implode("-", $tab_transition);

$sql_update = "update menu set libelle = '$libelle' ,niveau = '$niveau',variable_associer = '$variable_associe' ,icon = '$icon',url = '$url' where id = $id";

$sortie = $postgres->insertSQL($conn, $sql_update);

$sortie = array("erreur" => "non", "notification" => "success", "message" => "Opération terminée avec succès", "datas" => array());
echo json_encode($sortie);
