<?php
/**
 * Default
 * 
 * 
 * @package    
 * @subpackage Controller
 * @author     YOUR NAME <YOUREMAIL@jouve.com>
 */
include 'config/connexion.php';

//BDD
$postgres = new connexion();
$conn = $postgres->connect();

//var_dump($_POST);
//SQL
$sql = "select * from menu m order by m.niveau";
$dataOut = $postgres->getSQL($conn, $sql);

//var_dump($dataOut);


function prendreEnfant($tableau, $niveau) {

    $enfant = [];
    foreach ($tableau as $key => $value) {
        $test_niveau = $value['niveau'];

        if ($niveau != $test_niveau) {
            $tab_menu = explode($niveau, $test_niveau);

//            if ($tab_menu[0] == $niveau) {
                $nombre = count($tab_menu);

                if ($nombre > 1) {
                    if($tab_menu[0] == "")
                    $enfant[] = $value;
                }
//            }
        }
    }

    return $enfant;
}

if (isset($_COOKIE['login']) && ($_COOKIE['login'] != null || $_COOKIE['login'] != "")) {
    ?>
    <div class="menu no-print" ng-show="showBanner" ng-controller="CtrlMenu" id="menuRaptor">
        <aside>
            <nav class="navbar navbar-inverse sidebar navbar-fixed-top" ng-class="menuSlide" role="navigation" id="navbarraptor">
                <div class="nav-side-menu">
                    <div class="brand uppercase">SEAD</div>

                    <i class="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>

                    <div class="menu-list">
                        <?php /* "activeMenu($event,x)"  permet activer "menu[x]" en active et par la même occasion d'ouvir le lien qui est contenu dans "li" */ ?>
                        <ul id="menu-content" class="menu-content collapse out">
                            <?php
                            //Ajout des menus du bdb du projet seulement pour 2 niveaux pour l'instant
                            if (is_array($dataOut)) {

                                $sortie_parent_enfant = [];

                                foreach ($dataOut as $key => $value) {

                                    $tab_niveau = explode("-", $value['niveau']);
                                    if (count($tab_niveau) == 1) {

                                        $enfant = [];
                                        $niv = $tab_niveau[0] . "";

                                        $value['enfant'] = prendreEnfant($dataOut, $niv);
                                        $sortie_parent_enfant[] = $value;
                                    } else {                                     
                                    }
                                }

                                $cle = 0;
                                foreach ($sortie_parent_enfant as $key1 => $parent) {
                                    $cle += 1;

                                    $libelle = $parent['libelle'];
                                    $niveau = $parent['niveau'];
                                    $url = $parent['url'];
                                    $variable_associer = $parent['variable_associer'];
                                    $icon = $parent['icon'];
                                    $tab_niveau = explode("-", $niveau);

                                    $enfant = $parent['enfant'];
                                    
                                    $ngShow = "";
                                    if($variable_associer != "" && $variable_associer != null)
                                        $ngShow = 'ng-if="'.$variable_associer.'"';
                                    
                                   
                                    $lien = '';    
                                    if($url != "")  //Si il n'y a pas de url
                                    {
                                        $lien = '<a href="' . $url . '">' . $icon . " " . $libelle . '  <span class="btn pull-right" style="margin-top:5px; padding-right: 0px;">' . $icon . '</span></a>';
                                    } else {
                                        $lien = '<span class="sans-url">' . $icon . " " . $libelle . '  <span class="btn pull-right" style="margin-top:5px; padding-right: 0px;">' . $icon . '</span></span>';
                                    }
                                    
                                    echo '<li ng-class="menu[' . $cle . ']" ng-click="activeMenu($event, ' . $cle . ')" '.$ngShow.'>
                                                ' . $lien . '
                                          </li>';
                                    echo '<ul class="sub-menu" ng-class="collapse['.$cle.']" '.$ngShow.'>';
                                    foreach ($enfant as $key2 => $ligne) {
                                        $cle += 1;
                                        $url_enfant = $ligne['url'];
                                        $libele_enfant = $ligne['libelle'];
                                        echo '<li ng-class="menu[' . $cle . ']" ng-click="activeMenu($event, ' . $cle . ')"><a href="'.$url_enfant.'">'.$libele_enfant.'</a></li>';                                       
                                    }
                                    echo '</ul>';
                                }
                            }

                            ?>
                            <li class="nav-bottom">
                                <a href="#deconnexion">
                                    <i class="fa fa-power-off fa-lg"></i> Déconnexion [<?php echo $_COOKIE['login']; ?>]<i class="fa fa-power-off fa-lg btn pull-right" style="margin-top: 5px;margin-right: 1px;"></i>
                                </a>
                            </li>
                            <li class="nav-bottom-menu-show-hide" ng-click="affichermenu()">                                                                    
                                <span ng-if="iconSlide">
                                    <i class="fa fa-lg btn pull-right fa-chevron-circle-right" aria-hidden="true" style="margin-top:5px" id="DivButton"></i>                                
                                </span>
                                <span ng-if="!iconSlide">
                                    <i class="fa fa-lg btn pull-right fa-chevron-circle-left" aria-hidden="true" style="margin-top:5px" id="DivButton"></i>                                
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </aside>

        <!--<div class="banner-top" ng-class="menuSlide">
            <img class="image-logo" src="ressources/images/LogoJouveMada.png">
        </div> -->
    </div>

    <?php
} else {
    ?>
    <!--<div class="menu" ng-if="showBanner" ng-controller="CtrlMenu" id="menuRaptor">-->
    <div class="menu" ng-show="showBanner" ng-controller="CtrlMenu" id="menuRaptor">
        <div class="bs-example">
            <nav role="navigation" class="navbar navbar-default">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <!--                    <button type="button" data-target="#navbarCollapse" data-toggle="collapse" class="navbar-toggle">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>-->
                    <img class="image-logo" src="ressources/images/LogoJouveMada.png">
                    <a href="#deconnexion" class="navbar-brand"><h2 style="padding-left: 20px;">Chargement de la page ...</h2></a>
                </div>
                <!-- Collection of nav links and other content for toggling -->
                <div id="navbarCollapse" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav"></ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#deconnexion">Déconnexion x</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <?php
}
?>