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
    function xcopy($source, $dest, $permissions = 0755)
    {
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

    echo("\n");
    echo "Test serveur PHP : Yes\n";
    $stat_pg = extension_loaded('pgsql') ? 'Yes':'No';
   
    echo "Test service Postgres : ".$stat_pg."\n" ;
    echo("\n");
    echo(" ****************************************************************\n");
    echo(" *---------- Bienvenue sur la creation de sous-projet ----------* \n");
    echo(" ****************************************************************\n");
    echo("\n");
    echo("Veuillez entrer le nom du projet\n");
    echo("(sans espace ni de caractere speciaux): ");
	
	$handle = fopen ("php://stdin","r");
	$line = fgets($handle);
	fclose($handle);

	$line = trim($line);

	echo "\n"; 

	if (trim($line) != "")
	{
            $line = trim($line);
            $str_path = 'packages/'.$line;
            if (!file_exists($str_path)) {
                mkdir($str_path, 0777, true);
                
                $source = "patron/default/";
                $dest = $str_path;
                
                xcopy($source, $dest);
                
                echo "Votre projet [$line] a bien ete cree.\n";
            } else {
                
                echo "Le projet [$line] existe deja.\n";
                echo "\n";
                echo "[ Veuillez utiliser un autre nom que [$line] ou de supprimer \n  manuellement [$line] pour des raisons de securite.\n";
                echo "  Merci de votre comprehension. ]\n";
            }		
	} else {
		echo "Nom du projet incorrect.\n";
	}
	
?>