<?php
include '../../../config/autoload.php';

//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
//BDD
$postgres = new connexion();
$conn = $postgres->connect();

$debut=$_POST['debut'];
$fin=$_POST['fin'];

$sql = 
    "SELECT (select count(reference) FROM sead.etude)AS nbtotal,
(SELECT COUNT(reference) FROM sead.etude WHERE categorie=1 AND sead.etude.date_demande BETWEEN '$debut' AND '$fin')AS complet,
(SELECT COUNT(reference) FROM sead.etude WHERE categorie>1 AND sead.etude.date_demande BETWEEN '$debut' AND '$fin')AS ncomplet,
(SELECT COUNT(reference) FROM sead.etude WHERE categorie=1 AND sead.etude.date_demande BETWEEN '$debut' AND '$fin')*100/NULLIF(
(SELECT(select count(reference) FROM sead.etude WHERE sead.etude.date_demande BETWEEN '$debut' AND '$fin')),0) AS pourcentagecomplet,
(SELECT COUNT(reference) FROM sead.etude WHERE categorie>1 AND sead.etude.date_demande BETWEEN '$debut' AND '$fin')*100/NULLIF(
(SELECT(select COUNT(reference) FROM sead.etude WHERE sead.etude.date_demande BETWEEN '$debut' AND '$fin')),0) AS pourcentagencomplet ";  
   
   
   $dataOut = $postgres->getSQL($conn, $sql);


//$dataPoints = array();

 foreach ($dataOut as $key => $row) {
    $dataPoints =[
        array("y" => $row['pourcentagecomplet'],"name" => "Dossiers complets remis "),
        array("y" => $row['pourcentagencomplet'],"name" => "Dossiers incomplets remis")];
   
   
 }
 echo json_encode($dataPoints, JSON_NUMERIC_CHECK);
 ?>