<?php

//ALL FUCNTION

/**
 * 
 * 
 * @param type Framework
 * @param type Jouve
 * @param type 
 * @return String
 */
function xcopy($source, $dest, $permissions = 0755) {
    // Check for symlinks
    if (is_link($source)) {
        return symlink(readlink($source), $dest);
    }

    // Simple copy for a file
    if (is_file($source)) {
        return copy($source, $dest);
    }

    // Make destination directory
    if (!is_dir($dest)) {
        mkdir($dest, $permissions);
    }

    // Loop through the folder
    $dir = dir($source);
    while (false !== $entry = $dir->read()) {
        // Skip pointers
        if ($entry == '.' || $entry == '..') {
            continue;
        }

        // Deep copy directories
        xcopy("$source/$entry", "$dest/$entry", $permissions);
    }

    // Clean up
    $dir->close();
    return true;
}

function readVersion($chemin = "./packages/login/ressources/js/app.js") {

    $lines = @file($chemin);

    $version = "0.0.0";
    foreach ($lines as $line) {

        $line = trim($line);

        if (strpos($line, '$rootScope.version') !== false) {
            $tab_line = explode("\"", $line);
            $version = trim($tab_line[1]);
        }
    }
    return $version;
}

function readLineVersion($chemin = './packages/login/ressources/js/app.js') {
    $lines = @file($chemin);
    $sortie = "";
    foreach ($lines as $line) {

        $line = trim($line);

        if (strpos($line, '$rootScope.version') !== false) {
            $sortie = $line;
        }
    }
    return $sortie;
}

function replaceVersion() {
    $data = file('./packages/login/ressources/js/app.js'); // reads an array of lines

    $version_old = readLineVersion();
    $version_new = readLineVersion("../../deposit/raptor/packages/login/ressources/js/app.js");

    //read the entire string
    $str = file_get_contents('./packages/login/ressources/js/app.js');

    //replace something in the file string - this is a VERY simple example
    $str = str_replace($version_old, $version_new, $str);

    //write the entire string
    file_put_contents('./packages/login/ressources/js/app.js', $str);
}

function replaceFichiers() {
    $dir = '../../deposit/raptor/';
    $files1 = scandir($dir);
    $dir = [];
    foreach ($files1 as $key => $value) {
        $tab_exclure = [".", "..", ".git", "packages", "nbproject","config", "index.php"];
        if (!in_array(strtolower($value), $tab_exclure))
            $dir[] = $value;
    }
    return ($dir);
}

$version = readVersion();
$version_dispo = readVersion("../../deposit/raptor/packages/login/ressources/js/app.js");
echo "\n";
echo "\n";
echo(" ***********************************************************\n");
echo(" ************ Interface de mise a jour RAPTOR **************\n");
echo(" ***********************************************************\n");
echo("\n");
echo(" Votre version de RAPTOR est le : " . $version . "\n");
echo(" Version disponnible : " . $version_dispo . "\n");
echo("\n");
echo(" Voulez vous proceder a la mise a jour de l'application ? [OUI/NON]:");

$handle = fopen("php://stdin", "r");
$line = fgets($handle);
fclose($handle);

$line = trim($line);

if (strtolower($line) == "oui") {
    echo("\n");
    echo " Mise a jours des fichiers";
    echo("\n");
    echo("\n");
    //Mise à jours des fichiers
    $tab_replace = replaceFichiers();   //mise à jours des fichiers de base Raptor

    $min = 0;
    $max = count($tab_replace);
    $pourcentage = 0;
    $progres = 0;
    foreach ($tab_replace as $key => $value) {
        $source = "../../deposit/raptor/" . $value;
        $dest = $value;

        xcopy($source, $dest);

        $pourcentage = $key * 100 / $max;

        echo " " . intval($pourcentage) . "%\n";
        $progres++;
    }
    echo " 100%\n";
    replaceVersion();    //mise à jours version
    //Fin mise à jours des fichiers

    echo "\n";
    echo " Voulez vous mettre a jours 'index.php' ? [OUI/NON]:";
    $handle = fopen("php://stdin", "r");
    $line = fgets($handle);
    fclose($handle);
    if (strtolower($line) == "oui") {
        $source = "../../deposit/raptor/index.php";
        $dest = "index.php";
        xcopy($source, $dest);
    }
    echo("\n");
    echo " Votre application est maintenant a jours.\n";
    echo " Version [" . $version_dispo . "]. A bientot! ";
    echo("\n");
} else {
    echo("\n");
    echo " Sortie de l'application. A bientot! \n";
    echo("\n");
}
?>