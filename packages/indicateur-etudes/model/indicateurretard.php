
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
    "SELECT COUNT(ecart_envoi) AS ecart_total,(SELECT COUNT(ecart_envoi) from sead.etude WHERE  ecart_envoi<=0  AND date_demande BETWEEN '$debut' AND '$fin')AS etude_nretard,(SELECT COUNT(ecart_envoi) FROM sead.etude WHERE  ecart_envoi>0 AND date_demande BETWEEN '$debut' AND '$fin')AS etude_retard FROM sead.etude";  
   // $req = $conne->prepare($sql);
  // $req->bindParam(':a', $debut);
   // $req->bindParam(':b', $fin);
   // $req->execute();

   $dataPoints=array();
   $dataOut = $postgres->getSQL($conn, $sql);


//$dataPoints = array();

 foreach ($dataOut as $key => $row) {
    $dataPoints = [
        array("y" => $row['etude_nretard'],"name" => "Etudes remises à temps "),
        array("y" => $row['etude_retard'],"name" => "Etudes en retard")];


    //array_push($dataPoints, $dataPoi);
   
   
 }
 echo json_encode($dataPoints, JSON_NUMERIC_CHECK);
 ?>