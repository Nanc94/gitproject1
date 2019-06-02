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

//selectionner menu
$sql_selection = "select * from menu m where m.id = $id";
$sortie = $postgres->getSQL($conn, $sql_selection);

if (!is_array($sortie)) {
    $sortie = array("erreur" => "oui", "notification" => "danger", "message" => "Erreur de données", "datas" => array());
    echo json_encode($sortie);
    exit();
}

$datas = $sortie[0];
$niveau = $datas['niveau'];

//test niveau et rectification des données si il y a eu erreur lors de l'enregistrement
$tab_niveau = explode("-", $niveau);
$tab_transition = [];
foreach ($tab_niveau as $key => $value) {
    $entier = intval($value);
    $tab_transition[] = $entier;
}
$niveau = implode("-", $tab_transition);



//modification niveau
$tab_niveau = explode("-", $niveau);
$tab_niveau[] = "1";
$niveau = implode("-", $tab_niveau);



$sql_update = "update menu set niveau = '$niveau' where id = $id";

$sortie = $postgres->insertSQL($conn, $sql_update);

$sortie = array("erreur" => "non", "notification" => "success", "message" => "Opération terminée avec succès", "datas" => array());
echo json_encode($sortie);
