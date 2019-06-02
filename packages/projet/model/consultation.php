<?php

include '../../../config/autoload.php';

//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
//$conne = new PDO('pgsql:host=192.168.4.239;port=5432;dbname=etude', 'postgres', 'postgres');
//BDD
$postgres = new connexion();
$conn = $postgres->connect();

$nom = trim(pg_escape_string($_POST['nom']));

$sql = "select 

            case 
                    when TRIM(nom) <> '' then nom
                else societe
            end nomx , *

            from (

            SELECT DISTINCT split_part(sead.etude.nom,' - ',1) as societe, split_part(sead.etude.nom,' - ',2) as nom,sead.etude.date_reception,sead.etude.date_demande,sead.etude.ecart_envoi,sead.etude.ecart_reception,sead.etude.date_remise_demande,sead.etude.date_remise_reelle,sead.etude.reference,sead.type.libelle AS libelle1,sead.etat.libelle AS libelle2,sead.statut.libelle AS libelle3,sead.demandeur_etude.reference,sead.demandeur_etude.id_demandeur,sead.demandeur.id_demandeur,sead.demandeur.nom AS nom1,sead.demandeur.prenoms AS prenom1,sead.demandeur.societe AS societe1,sead.demandeur.mail AS mail1,sead.client.id_client,sead.client.nom AS nom2,sead.client.prenoms AS prenom2,sead.client.societe AS societe2,sead.client.mail AS mail2,sead.client_etude.reference,sead.client_etude.id_client,sead.process.id_process,sead.process.libelle AS libelle4,sead.process_demande.reference,sead.process_demande.id_process,sead.process_demande.taux_qte AS taux_qte1,sead.process_demande.particularite AS particul1,sead.process_traitement.reference,sead.process_traitement.id_process,sead.process_traitement.particularite AS particul2,sead.process_traitement.taux_qte AS taux_qte2,sead.process_traitement.vitesse_tec,sead.process.id_process,sead.process.libelle AS libelle5,sead.type_outils.id_type_outils,sead.type_outils.libelle AS libelle6,sead.process_outil.reference,sead.process_outil.id_type_outil,sead.process_outil.id_type_outil,sead.process_outil.nom_outil,sead.process_outil.id_dev,sead.cp.id_aq_mail_cp,sead.cp.nom AS nom_cp,sead.resultat.dossier_gagne,sead.resultat.reference,sead.resultat.motif_non_validation,sead.resultat.debut_traitement_demande,sead.resultat.debut_traitement,sead.resultat.ecart_demarrage,sead.resultat.id_ligne,sead.resultat.cp,sead.resultat_process.id_process,sead.resultat_process.vitesse_tec,sead.resultat_process.unite_heure,sead.resultat_process.taux_qte FROM sead.etude 
            FULL JOIN sead.type ON sead.etude.type=sead.type.id_type 
            FULL JOIN sead.etat ON sead.etude.etat=sead.etat.id_etat 
            FULL JOIN sead.statut ON sead.etude.statut=sead.statut.id_statut 
            FULL JOIN sead.demandeur_etude ON sead.etude.reference=sead.demandeur_etude.reference 
            FULL JOIN sead.demandeur ON sead.demandeur_etude.id_demandeur=sead.demandeur.id_demandeur 
            FULL JOIN sead.client_etude ON sead.etude.reference=sead.client_etude.reference 
            FULL JOIN sead.client ON sead.client_etude.id_client=sead.client.id_client 
            FULL JOIN sead.process_demande ON sead.process_demande.reference=sead.etude.reference 
            FULL JOIN sead.process ON sead.process.id_process=sead.process_demande.id_process 
            FULL JOIN sead.process_traitement ON sead.process_traitement.reference=sead.etude.reference AND sead.process.id_process=sead.process_traitement.id_process 
            FULL JOIN sead.process_outil ON sead.etude.reference=sead.process_outil.reference 
            FULL JOIN sead.type_outils ON sead.type_outils.id_type_outils=sead.process_outil.id_type_outil 
            FULL JOIN sead.cp ON sead.process_outil.id_dev=sead.cp.id_aq_mail_cp 
            FULL JOIN sead.resultat ON sead.etude.reference=sead.resultat.reference 
            FULL JOIN sead.resultat_process ON sead.etude.reference=sead.resultat_process.reference 
            WHERE lower(sead.etude.nom) LIKE lower('%$nom%') 
            ORDER BY sead.etude.reference
            ) ss ";

$dataOut = $postgres->getSQL($conn, $sql);
$sortie = array();
if (is_array($dataOut)) {
    $sortie = array("datas" => $dataOut);
} else {
    $sortie = array("datas" => array());
}

if ($nom == "")
    $sortie = array("datas" => array());
echo json_encode($sortie);
?>


