
<?php
//include '../../../config/autoload.php';

//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");

$conne = new PDO('pgsql:host=localhost;port=5432;dbname=etude', 'postgres','postgres');
$debut=$_POST['debut'];
$fin=$_POST['fin'];

$req = $conne->prepare("select count(reference) as nbperdu,extract(year from date_demande) as annee from sead.etude where (statut<=4 or statut >=6) group by annee ORDER BY annee");
//$req2 = $conne->prepare("select count(reference) as nbperdu,extract(year from date_demande) as annee from sead.etude where (statut<=4 or statut >=6) group by annee ORDER BY annee");

 $req->execute();
 // $req2->execute();
  

   $dataPoints=array();
    for($i=0; $row = $req->fetch(); $i++){
   //print $row['COUNT(nom)'];
	$dataPoi = array("y" => $row['nbperdu'],"label" => $row['annee']);
	array_push($dataPoints, $dataPoi);
 };
 echo json_encode($dataPoints, JSON_NUMERIC_CHECK);

 ?>