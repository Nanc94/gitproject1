<?php
include '../../../config/autoload.php';

$postgres = new connexion();
$conn = $postgres->connect();

$debut = $_POST['debut'];
$fin = $_POST['fin'];



$sql ="
        SELECT split_part(sead.etude.nom,' - ',1) as societe, split_part(sead.etude.nom,' - ',2) as nom,date_reception,date_remise_reelle,type,statut
        FROM sead.etude WHERE (statut <= 2 or statut >= 8) AND date_demande between '$debut' AND '$fin'";


 $dataOut = $postgres->getSQL($conn, $sql);


$dataPoints = array();
if(is_array($dataOut))

 foreach ($dataOut as $key => $row) {
   
    $dataPoints[] = array("date_reception"=>$row['date_reception'],
                          "date_remise"=>$row['date_remise_reelle'],
                          "nometude"=>$row['nom'],
                          "type"=>$row['type'],
                          "statut"=>$row['statut']
);

}

echo json_encode($dataPoints);

?>