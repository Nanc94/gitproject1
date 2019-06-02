
<?php
include '../../../config/autoload.php';

//BDD
$postgres = new connexion();
$conn = $postgres->connect();
$debut=$_POST['debut'];
$fin=$_POST['fin'];

$sql = 
    "SELECT COUNT( resultat_process.reference) AS nb_total,(SELECT COUNT( process_traitement.reference) from sead.resultat_process,sead.process_traitement,sead.etude WHERE process_traitement.reference=resultat_process.reference AND process_traitement.taux_qte<=resultat_process.taux_qte AND process_traitement.reference=etude.reference AND resultat_process.reference=etude.reference AND date_demande between '$debut' AND '$fin' )AS tauxqteatteinte,
(SELECT COUNT( process_traitement.reference) FROM sead.resultat_process,sead.process_traitement,sead.etude WHERE process_traitement.reference=resultat_process.reference AND process_traitement.taux_qte>resultat_process.taux_qte AND process_traitement.reference=etude.reference AND resultat_process.reference=etude.reference AND date_demande between '$debut' AND '$fin')AS tauxqtenonatteinte FROM sead.resultat_process  ";  

   
   $dataOut = $postgres->getSQL($conn, $sql);




 foreach ($dataOut as $key => $row) {
    $dataPoints = [
        array("y" => $row['tauxqtenonatteinte'],"name" => " Qualité non atteinte "),
        array("y" => $row['tauxqteatteinte'],"name" => "  Qualité atteinte")];
   
   
 }
 echo json_encode($dataPoints, JSON_NUMERIC_CHECK);
 ?>