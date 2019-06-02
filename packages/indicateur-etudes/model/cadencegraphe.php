
<?php
include '../../../config/autoload.php';

//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
//BDD
$postgres = new connexion();
$conn = $postgres->connect();
//$conne = new PDO('pgsql:host=192.168.4.239;port=5432;dbname=etude', 'postgres','postgres');
$debut=$_POST['debut'];
$fin=$_POST['fin'];

$sql = 
    "SELECT COUNT(resultat_process.reference) AS nb_total,(SELECT COUNT(resultat_process.reference) from sead.resultat_process,sead.etude WHERE  resultat_process.objectif<=resultat_process.vitesse_tec  AND resultat_process.reference=etude.reference AND resultat_process.objectif Is NOT NULL AND resultat_process.vitesse_tec IS NOT NULL AND sead.etude.date_demande between '$debut' AND '$fin')AS cadencenatteinte,
(SELECT COUNT(resultat_process.reference) FROM sead.resultat_process,sead.etude WHERE  resultat_process.objectif>resultat_process.vitesse_tec AND resultat_process.reference=etude.reference AND resultat_process.objectif Is NOT NULL AND resultat_process.vitesse_tec IS NOT NULL AND sead.etude.date_demande between '$debut' AND '$fin')AS cadenceatteinte FROM sead.resultat_process ";  
   // $req = $conne->prepare($sql);
  // $req->bindParam(':a', $debut);
   // $req->bindParam(':b', $fin);
   // $req->execute();

   //$dataPoints=array();
   $dataOut = $postgres->getSQL($conn, $sql);


//$dataPoints = array();

 foreach ($dataOut as $key => $row) {
    $dataPoints =[
        array("y" => $row['cadencenatteinte'],"name" => "Cadence non atteinte "),
        array("y" => $row['cadenceatteinte'],"name" => "Cadence atteinte")];


    //array_push($dataPoints, $dataPoi);
   
   
 }
 echo json_encode($dataPoints, JSON_NUMERIC_CHECK);
 ?>