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



$matricule = $_POST['matricule'];

if (trim($matricule) == "") {
    $tab_sortie = array("erreur" => "oui");
    echo json_encode($tab_sortie);
    exit();
}

$consultater = $_POST['consulter'];
$ajouter = $_POST['ajouter'];
$editer = $_POST['editer'];
$supprimer = $_POST['supprimer'];
$admin = $_POST['admin'];

//Si existe 

$sql = "select count(*) as nombre from utilisateur u where u.matricule = '$matricule'";
$dataOut = $postgres->insertSQL($conn, $sql);

$nombre = $dataOut[0]['nombre'];

if ($nombre > 0) {
    $tab_sortie = array("erreur" => "oui");
    echo json_encode($tab_sortie);
    exit();
}

//On selectionne le fournisseur corespondant au nom fournisseur et on enregistre le nouveau donné
$sql = "insert into utilisateur (matricule,consulter,ajouter,editer,supprimer,administrateur) values ('$matricule',$consultater,$ajouter,$editer,$supprimer,$admin) RETURNING id";

$dataOut = $postgres->insertSQL($conn, $sql);

$id = $dataOut[0]['id'];

//TEST si il y a erreur
if (is_numeric($id)) {

    $tab_sortie = array("erreur" => "non");

    echo json_encode($tab_sortie);
} else {
    $tab_sortie = array("erreur" => "oui");
    echo json_encode($tab_sortie);
    exit();
}
