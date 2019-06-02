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

$id = $_POST['id'];
$consulter = $_POST['consulter'];
$ajouter = $_POST['ajouter'];
$editer = $_POST['editer'];
$supprimer = $_POST['supprimer'];
$admin = $_POST['admin'];

//$montant_bon = ($montant_bon != "") ? $montant_bon : 0;

//On met à ajour les données
$sql = "update utilisateur set consulter = $consulter,ajouter = $ajouter, editer=$editer ,supprimer=$supprimer,administrateur=$admin where id = $id RETURNING id";

$dataOut = $postgres->updateSQL($conn, $sql);

$id = $dataOut[0]['id'];

//TEST si il y a erreur
if (is_numeric($id)) {


    $tab_sortie = array("erreur" => "non");
    echo json_encode($tab_sortie);
} else {
    $tab_sortie = array("erreur" => "oui");
    echo json_encode($tab_sortie);
}

//}
?>