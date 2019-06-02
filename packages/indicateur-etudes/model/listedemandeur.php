
<?php
//include '../../../config/autoload.php';

//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");

$conne = new PDO('pgsql:host=localhost;port=5432;dbname=etude', 'postgres','postgres');
$debut=$_POST['debut'];
$fin=$_POST['fin'];

$req = $conne->prepare("select count(sead.client_etude.reference) as nbclient,extract(year from sead.etude.date_demande) as annee 
from sead.etude,sead.client,sead.client_etude where sead.client_etude.id_client=sead.client.id_client and sead.etude.reference=sead.client_etude.reference 
group by annee ORDER BY annee");
$req2 = $conne->prepare("select count(sead.demandeur_etude.reference) as nbdemandeur,extract(year from sead.etude.date_demande) as annee 
from sead.etude,sead.demandeur,sead.demandeur_etude where sead.demandeur_etude.id_demandeur=sead.demandeur.id_demandeur and sead.etude.reference=sead.demandeur_etude.reference 
group by annee ORDER BY annee");


 $req->execute();
 $req2->execute();
 
  


    for($i=0; $row = $req->fetch(), $row2 = $req2->fetch(); $i++){
  
	$dataPoints[] = array("annee"=>$row['annee']? $row['annee'] : $row2['annee'],
                          "client"=>$row['nbclient'],
                          "demandeur"=>$row2['nbdemandeur']
	);
	
 };
 echo json_encode($dataPoints, JSON_NUMERIC_CHECK);

 ?>