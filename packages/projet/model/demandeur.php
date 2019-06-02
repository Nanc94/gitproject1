

<?php

include '../../../config/autoload.php';


//BDD
$postgres = new connexion();
$conn = $postgres->connect();





$debut = $_POST['debut'];
$fin = $_POST['fin'];

$sql = "

SELECT (select count(DISTINCT id_client)FROM sead.client_etude)+(select count(DISTINCT id_demandeur) from sead.demandeur_etude)AS nbtotal,
(SELECT COUNT(DISTINCT sead.client_etude.id_client) FROM sead.client_etude,sead.client,sead.etude WHERE sead.client_etude.id_client=sead.client.id_client AND sead.etude.reference=sead.client_etude.reference AND date_demande BETWEEN '$debut' AND '$fin')*100/NULLIF(
(SELECT(SELECT COUNT(DISTINCT sead.client_etude.id_client) FROM sead.client_etude,sead.client,sead.etude WHERE sead.client_etude.id_client=sead.client.id_client AND sead.etude.reference=sead.client_etude.reference AND date_demande BETWEEN '$debut' AND '$fin')+(SELECT COUNT(DISTINCT sead.demandeur_etude.id_demandeur) FROM sead.demandeur_etude,sead.demandeur,sead.etude WHERE sead.demandeur_etude.id_demandeur=sead.demandeur.id_demandeur 
AND sead.etude.reference=sead.demandeur_etude.reference AND date_demande BETWEEN '$debut' AND '$fin')),0) AS pourcentageclient,
(SELECT COUNT(DISTINCT sead.demandeur_etude.id_demandeur) FROM sead.demandeur_etude,sead.demandeur,sead.etude WHERE sead.demandeur_etude.id_demandeur=sead.demandeur.id_demandeur AND sead.etude.reference=sead.demandeur_etude.reference AND date_demande BETWEEN '$debut' AND '$fin')*100/NULLIF(
(SELECT(SELECT COUNT(DISTINCT sead.client_etude.id_client) FROM sead.client_etude,sead.client,sead.etude WHERE sead.client_etude.id_client=sead.client.id_client AND sead.etude.reference=sead.client_etude.reference AND date_demande BETWEEN '$debut' AND '$fin')+(SELECT COUNT(DISTINCT sead.demandeur_etude.id_demandeur) FROM sead.demandeur_etude,sead.demandeur,sead.etude WHERE sead.demandeur_etude.id_demandeur=sead.demandeur.id_demandeur 
AND sead.etude.reference=sead.demandeur_etude.reference AND date_demande BETWEEN '$debut' AND '$fin')),0)AS pourcentagedemandeur";


$dataOut = $postgres->getSQL($conn, $sql);


$dataPoints = array();

foreach ($dataOut as $key => $row) {
//    $dataPoi = array("y" => $row['compte'], "label" => $row['libelle']);
//    array_push($dataPoints, $dataPoi);

    $dataPoints = [
        array("y" => $row['pourcentageclient'], "name" => "Clients directs"),
        array("y" => $row['pourcentagedemandeur'], "name" => "Demandeurs jouve")];
   
}
//for ($i = 0; $row = $req->fetch(); $i++) {
//    //print $row['COUNT(nom)'];
//    $dataPoi = array("y" => $row['compte'], "label" => $row['libelle']);
//    array_push($dataPoints, $dataPoi);
//};
echo json_encode($dataPoints, JSON_NUMERIC_CHECK);
//print $debut;  
?>