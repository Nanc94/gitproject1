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


//On supprimer l'utilisateur
$sql = "delete from utilisateur where id = $id";

$postgres->deleteSQL($conn, $sql);

$tab_sortie = array("erreur" => "non");

echo json_encode($tab_sortie);


//}
?>