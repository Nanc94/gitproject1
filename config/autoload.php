<?php

function __autoload($classname) {
    if ($classname == "connexion"){
        $filename = "../../../config/". $classname .".php";
        include_once($filename);        
    }
    elseif ($classname == "ConnexionPDO") {
    	$filename = "../../../config/". $classname .".php";
        include_once($filename);
    }
    else {
        //Pour les autres ont introduit le separateur projet "_" example projet1_actualite
        $tab_name = explode("_", $classname);
        $filename = "../../../packages/".$tab_name[0]."/model/".$classname .".php";
        $filename2 = "../../../packages/".strtolower($tab_name[0])."/model/".strtolower($classname) .".class.php";
        if (is_file($filename)) {
            include_once($filename);
        }elseif (is_file($filename2)) {
            include_once($filename2);
        }
    }
}