<?php
include '../../../config/autoload.php';

$postgres = new connexion();
$conn = $postgres->connect();

$debut = $_POST['debut'];
$fin = $_POST['fin'];



$sql ="SELECT DISTINCT case when position('-' in sead.etude.nom)>0 
       then split_part(sead.etude.nom,' - ',1) else NULL end as societe, case when position('-' in sead.etude.nom)>0 then 
       split_part(sead.etude.nom,' - ',2) 
        else split_part(sead.etude.nom,' - ',1) end as nom,etude.type,
        etude.date_reception,etude.date_remise_demande,etude.date_remise_reelle,etude.ecart_envoi,type.libelle 
        from sead.etude,sead.type 
        WHERE etude.type=type.id_type AND etude.ecart_envoi>0 AND date_demande BETWEEN '$debut' AND '$fin'
        ";


 $dataOut = $postgres->getSQL($conn, $sql);


$dataPoints = array();
if(is_array($dataOut))
 foreach ($dataOut as $key => $row) {
   
    $dataPoints[] = array("nom"=>$row['nom'],
    					  "type"=>$row['libelle'],
    					  "date_reception"=>$row['date_reception'],
                          "delai"=>$row['date_remise_demande'],
                          "date_remise"=>$row['date_remise_reelle'],
                          "ecart"=>$row['ecart_envoi']
);

}

echo json_encode($dataPoints);

?>