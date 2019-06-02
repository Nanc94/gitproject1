
<?php
include '../../../config/autoload.php';


//BDD
$postgres = new connexion();
$conn = $postgres->connect();


$debut=$_POST['debut'];
$fin=$_POST['fin'];
$libelle=$_POST['libelle'];

$sql = "SELECT *
		FROM sead.etude,sead.statut 
		WHERE sead.etude.statut=sead.statut.id_statut AND date_demande 
		BETWEEN '$debut' AND '$fin' 
		and sead.statut.libelle = '$libelle'";  

   
   $dataOut = $postgres->getSQL($conn, $sql);

$sortie = array("datas" => $dataOut);

 echo json_encode($sortie);
 ?>
