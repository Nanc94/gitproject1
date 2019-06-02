<?php
include '../../../config/autoload.php';


//BDD
$postgres = new connexion();
$conn = $postgres->connect();


$debut=$_POST['debut'];
$fin=$_POST['fin'];
$ncomplet=$_POST['ncomplet'];

$sql = "SELECT *
		FROM sead.etude,sead.categorie 
		WHERE  date_demande
		BETWEEN '$debut' AND '$fin'  AND categorie>1 AND etude.categorie=categorie.id_categorie 
		and (SELECT COUNT(sead.etude.reference) FROM sead.etude WHERE categorie>1 AND  
sead.etude.date_demande BETWEEN '$debut' AND '$fin') = '$ncomplet'";  

   
   $dataOut = $postgres->getSQL($conn, $sql);

$sortie = array("datas" => $dataOut);

 echo json_encode($sortie);
 ?>
