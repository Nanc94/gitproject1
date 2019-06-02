<?php

include '../../../config/autoload.php';

//BDD
$postgres = new connexion();
$conn = $postgres->connect();


$debut = $_POST['debut'];
$fin = $_POST['fin'];

$sql = "SELECT count(sead.etude.reference),(SELECT count(sead.etude.reference) FROM sead.etude WHERE statut=1 AND date_demande BETWEEN '$debut' AND '$fin') AS NOUVEAU, 
(SELECT count(sead.etude.reference) FROM sead.etude WHERE statut=2 AND date_demande BETWEEN '$debut' AND '$fin') AS ENCOURS,
(SELECT count(sead.etude.reference) FROM sead.etude WHERE statut=3 AND date_demande BETWEEN '$debut' AND '$fin') AS ATTENTE,
(SELECT count(sead.etude.reference) FROM sead.etude WHERE statut=4 AND date_demande BETWEEN '$debut' AND '$fin') AS ABANDONNE,
(SELECT count(sead.etude.reference) FROM sead.etude WHERE statut=5 AND date_demande BETWEEN '$debut' AND '$fin') AS PASSEPROD,
(SELECT count(sead.etude.reference) FROM sead.etude WHERE statut=6 AND date_demande BETWEEN '$debut' AND '$fin') AS NONOBTENUE,
(SELECT count(sead.etude.reference) FROM sead.etude WHERE statut=7 AND date_demande BETWEEN '$debut' AND '$fin') AS SANSREPONSE,
(SELECT count(sead.etude.reference) FROM sead.etude WHERE statut=8 AND date_demande BETWEEN '$debut' AND '$fin') AS PLANIFIE,
(SELECT count(sead.etude.reference) FROM sead.etude WHERE statut=9 AND date_demande BETWEEN '$debut' AND '$fin') AS TEST FROM sead.etude";

$dataOut = $postgres->getSQL($conn, $sql);


$dataPoints = array();

foreach ($dataOut as $key => $row) {
    $dataPoints =  [
        array("y" => $row['nouveau'],"label" => "Nouveau"),
        array("y" => $row['encours'],"label" => "En cours d'étude"),
        array("y" => $row['attente'],"label" => "En attente de validation"),
        array("y" => $row['abandonne'],"label" => "Abandonné"),
        array("y" => $row['passeprod'],"label" => "Passé en prod"),
        array("y" => $row['nonobtenue'],"label" => "Non obtenu"),
        array("y" => $row['sansreponse'],"label" => "Sans reponse"),
        array("y" => $row['planifie'],"label" => "Planifié"),
    	array("y" => $row['test'],"label" => "En cours de test")];
   
}

echo json_encode($dataPoints, JSON_NUMERIC_CHECK);

?>