<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$sousProjet = pg_escape_string($_POST['sousProjet']);
$nomFichier = pg_escape_string($_POST['nomFichier']);
$dataHTML = pg_escape_string($_POST['dataHTML']);


$arrayTest = ["default", "login", "r-config", "r-generation"];

if (in_array($sousProjet, $arrayTest)) {
    $sortie = array("erreur" => "non", "notification" => "danger", "message" => "Veuillez utiliser un autre sous projet que [$sousProjet]", "datas" => array());
    echo json_encode($sortie);
    exit();
}

if ($nomFichier == null || trim($nomFichier) == "") {
    $sortie = array("erreur" => "non", "notification" => "danger", "message" => "Nom du fichier vide", "datas" => array());
    echo json_encode($sortie);
    exit();
}

$cheminEtFichier = "../../" . $sousProjet . "/views/" . $nomFichier;
$myfile = fopen($cheminEtFichier, "w") or die("Unable to open file!");

$txt = $dataHTML;
fwrite($myfile, $txt);
fclose($myfile);


$sortie = array("erreur" => "non", "notification" => "success", "message" => "Création fichier terminée", "datas" => array());
echo json_encode($sortie);
