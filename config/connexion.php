<?php

class connexion {

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
    }

    public function connect() {

        $host = $this->host;
        $dbname = $this->dbname;
        $user = $this->user;
        $password = $this->password;

        //Simple connexion
        $connStr = "host=$host port=5432 dbname=$dbname user=$user password=$password";
        return $conn = pg_connect($connStr);
    }

    public function getSQL($conn, $sql) {
        $result = pg_query($conn, $sql);
        $alldata = pg_fetch_all($result);
        return $alldata;
    }
    
    //besoin de retourner Id
    public function insertSQL($conn, $sql) {
        $result = pg_query($conn, $sql);
        if ($result) {
            return pg_fetch_all($result);
        } else {
            return pg_fetch_all($result);
        }
    }
    //updateSQL à besoin de retourner Id "RETURNS id"
    public function updateSQL($conn, $sql) {
        $result = pg_query($conn, $sql);
        if ($result) {
            return pg_fetch_all($result);
        } else {
            return pg_fetch_all($result);
        }
    }

    public function deleteSQL($conn, $sql) {
        $result = pg_query($conn, $sql);
    }

}

?>