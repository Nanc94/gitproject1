<?php
include '../../../config/autoload.php';

$postgres = new connexion();
$conn = $postgres->connect();

$debut = $_POST['debut'];
$fin = $_POST['fin'];



$sql =" SELECT DISTINCT case when position('-' in sead.process_traitement.nom_etude)>0 then split_part(sead.process_traitement.nom_etude,' - ',1) else NULL end as societe, case when position('-' in sead.process_traitement.nom_etude)>0 then split_part(sead.process_traitement.nom_etude,' - ',2)
 else split_part(sead.process_traitement.nom_etude,' - ',1) end as nom,sead.process_traitement.taux_qte AS objectif,sead.resultat_process.taux_qte AS realise,sead.process.libelle,resultat_process.particularite
			FROM sead.process_traitement,sead.etude,sead.resultat_process,sead.process
		WHERE sead.process_traitement.reference=sead.resultat_process.reference AND process.id_process=resultat_process.id_process
			AND sead.process_traitement.reference=sead.etude.reference AND process_traitement.taux_qte IS NOT NULL AND resultat_process.taux_qte IS NOT NULL
			AND  sead.etude.date_demande BETWEEN '$debut' AND '$fin'
			GROUP BY process_traitement.nom_etude, process_traitement.taux_qte, resultat_process.taux_qte,process.libelle,resultat_process.particularite
        ";


 $dataOut = $postgres->getSQL($conn, $sql);

$dataPoints = [];
//$dataPoints = array();
if(is_array($dataOut))
 foreach ($dataOut as $key => $row) {
   
    $dataPoints[] = array("societe"=>$row['societe'],
    						          "nom"=>$row['nom'],
    						          "process"=>$row['libelle'],
    						          "particularite"=>$row['particularite'],
                          "objectif_qte"=>$row['objectif'],
                          "realise"=>$row['realise']
                          
);

}

echo json_encode($dataPoints);

?>