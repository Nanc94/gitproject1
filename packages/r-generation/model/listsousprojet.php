<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function replaceFichiers() {
    $dir = '../../../packages';
    $files1 = scandir($dir);
    $dir = [];
    foreach ($files1 as $key => $value) {
        $tab_exclure = [".", ".."];
        if (!in_array(strtolower($value), $tab_exclure))
            $dir[] = $value;
    }
    return ($dir);
}


$tab_dir = replaceFichiers();

$dataOut = array("dossier" => $tab_dir);
echo json_encode($dataOut);