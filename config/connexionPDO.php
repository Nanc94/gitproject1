<?php

class ConnexionPDO {

    //public $conn;
    public $conn;
    public $host;
    public $dbname;
    public $user;
    public $password;

    function __construct($host = "localhost", $dbname = "etude", $user = "postgres", $password = "postgres") {
        $this->host = $host;
        $this->dbname = $dbname;
        $this->user = $user;
        $this->password = $password;
        try {
            $this->conn = new PDO("pgsql:dbname=$dbname;host=$host;port=5432", $user, $password, array(
                PDO::ATTR_EMULATE_PREPARES=>false,
                PDO::MYSQL_ATTR_DIRECT_QUERY=>false,
                PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION
                ));
        } catch (Exception $e) {
            print_r($e);
        }
    }

    // execute une requêtte via PDO avec method query pour les SELECT

    // public function getSQL($conn, $sql) {
    //     $result = pg_query($conn, $sql);
    //     $alldata = pg_fetch_all($result);
    //     return $alldata;
    // }
    
    // //besoin de retourner Id
    // public function insertSQL($conn, $sql) {
    //     $result = pg_query($conn, $sql);
    //     if ($result) {
    //         return pg_fetch_all($result);
    //     } else {
    //         return pg_fetch_all($result);
    //     }
    // }
    // //updateSQL à besoin de retourner Id "RETURNS id"
    // public function updateSQL($conn, $sql) {
    //     $result = pg_query($conn, $sql);
    //     if ($result) {
    //         return pg_fetch_all($result);
    //     } else {
    //         return pg_fetch_all($result);
    //     }
    // }

    // public function deleteSQL($conn, $sql) {
    //     $result = pg_query($conn, $sql);
    // }

}

?>