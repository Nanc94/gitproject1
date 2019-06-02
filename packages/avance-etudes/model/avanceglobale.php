
<?php
include '../../../config/autoload.php';


//BDD
$postgres = new connexion();
$conn = $postgres->connect();
$debut=$_POST['debut'];
$fin=$_POST['fin'];

$sql = 
    "SELECT COUNT(sead.etude.reference) as nombre,sead.etude.statut,sead.statut.libelle FROM sead.etude,sead.statut WHERE sead.etude.statut=sead.statut.id_statut AND date_demande BETWEEN '$debut' AND '$fin' group by sead.etude.statut,statut.libelle";  

   
   $dataOut = $postgres->getSQL($conn, $sql);
   $dataPoints=array();
   if(is_array($dataOut))

 foreach ($dataOut as $key => $row) {
   
	$dataPoints[]=array("statut"=>$row['libelle'],"nombre"=>$row['nombre']);
 }
 echo json_encode($dataPoints);
 ?>