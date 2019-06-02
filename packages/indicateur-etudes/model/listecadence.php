<?php
include '../../../config/autoload.php';

$postgres = new connexion();
$conn = $postgres->connect();

$debut = $_POST['debut'];
$fin = $_POST['fin'];



$sql ="SELECT DISTINCT case when position('-' in sead.resultat_process.nom_etude)>0 then split_part(sead.resultat_process.nom_etude,' - ',1) else NULL end as societe, case when position('-' in sead.resultat_process.nom_etude)>0 then split_part(sead.resultat_process.nom_etude,' - ',2) else split_part(sead.resultat_process.nom_etude,' - ',1) end as nom,
sead.resultat_process.objectif AS objectif,sead.resultat_process.vitesse_tec AS realise,sead.process.libelle,sead.resultat_process.particularite
			FROM sead.etude,sead.resultat_process,sead.process
		WHERE 
		  sead.process.id_process=sead.resultat_process.id_process AND resultat_process.objectif IS NOT NULL AND resultat_process.vitesse_tec IS NOT NULL
		  AND resultat_process.reference=etude.reference
			AND sead.etude.date_demande BETWEEN '$debut' AND '$fin'
			GROUP BY resultat_process.nom_etude, resultat_process.objectif, resultat_process.vitesse_tec,process.libelle,resultat_process.particularite
			 order by nom
			
        ";


 $dataOut = $postgres->getSQL($conn, $sql);


$dataPoints = array();
if(is_array($dataOut))
 foreach ($dataOut as $key => $row) {
   
    $dataPoints[] = array("societe"=>$row['societe'],
    					"nom"=>$row['nom'],
    					"process"=>$row['libelle'],
                          "objectif_cadence"=>$row['objectif'],
                          "realise"=>$row['realise'],
                          "particularite"=>$row['particularite'],
                         

                          
);

}

echo json_encode($dataPoints);

?>