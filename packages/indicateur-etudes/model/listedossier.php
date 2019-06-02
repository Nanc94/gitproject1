<?php
include '../../../config/autoload.php';

$postgres = new connexion();
$conn = $postgres->connect();

$debut = $_POST['debut'];
$fin = $_POST['fin'];



$sql ="SELECT COUNT(sead.etude.reference),(SELECT COUNT(sead.etude.reference) FROM sead.etude WHERE categorie=1 AND  
sead.etude.date_demande BETWEEN '$debut' AND '$fin')AS complet,(SELECT COUNT(sead.etude.reference) FROM sead.etude WHERE categorie>1 
AND  sead.etude.date_demande BETWEEN '$debut' AND '$fin')AS ncomplet FROM sead.etude 
WHERE  sead.etude.date_demande BETWEEN '$debut' AND '$fin'
        ";


 $dataOut = $postgres->getSQL($conn, $sql);


//$dataPoints = array();

 foreach ($dataOut as $key => $row) {
   
    $dataPoints[] = array("nbtotal"=>$row['count'],
                          "complet"=>$row['complet'],
                          "ncomplet"=>$row['ncomplet']
                          
);

}

echo json_encode($dataPoints);

?>