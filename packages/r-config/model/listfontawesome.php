<?php

function array_delete($array, $element) {
        return (is_array($element)) ? array_values(array_diff($array, $element)) : array_values(array_diff($array, array($element)));
}
$icons_file = "../../../plugins/font-awesome/css/font-awesome.css";
$parsed_file = file_get_contents($icons_file);
preg_match_all("/fa\-([a-zA-z0-9\-]+[^\:\.\,\s])/", $parsed_file, $matches);
$exclude_icons = array("fa-lg", "fa-2x", "fa-3x", "fa-4x", "fa-5x", "fa-ul", "fa-li", "fa-fw", "fa-border", "fa-pulse", "fa-rotate-90", "fa-rotate-180", "fa-rotate-270", "fa-spin", "fa-flip-horizontal", "fa-flip-vertical", "fa-stack", "fa-stack-1x", "fa-stack-2x", "fa-inverse");
$icons = (object) array("icons" => array_delete($matches[0], $exclude_icons));
//print json_encode($icons);

$icons = array_unique($icons->icons);

$dataOut = array("fontawesome" => $icons);

echo json_encode($dataOut);

?>