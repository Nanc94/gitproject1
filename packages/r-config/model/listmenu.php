<?php

     /**
   * Default
   * 
   * 
   * @package    
   * @subpackage Controller
   * @author     YOUR NAME <YOUREMAIL@jouve.com>
   */

    include '../../../config/autoload.php';
    
    //BDD
    $postgres = new connexion(); 
    $conn = $postgres->connect();
    
    //var_dump($_POST);
    
    //SQL
    $sql = "select * from menu m order by m.niveau";
    $dataOut = $postgres->getSQL($conn,$sql);

    echo json_encode($dataOut);
    
?>