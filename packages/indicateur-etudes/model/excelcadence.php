<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/** Error reporting */
error_reporting(E_ALL);

/** Include path * */
ini_set('include_path', ini_get('include_path') . ';../Classes/');


/** PHPExcel */
include '../../../plugins/excel/PHPExcel.php';

/** PHPExcel_Writer_Excel2007 */
include '../../../plugins/excel/PHPExcel/Writer/Excel2007.php';

// Create new PHPExcel object
//echo date('H:i:s') . " Create new PHPExcel object\n";
$objPHPExcel = new PHPExcel();

// Set properties
//echo date('H:i:s') . " Set properties\n";
$objPHPExcel->getProperties()->setCreator("Jouve Madagascar");
$objPHPExcel->getProperties()->setLastModifiedBy("Jouve Madagascar");
$objPHPExcel->getProperties()->setTitle("Office 2007 XLSX Document");
$objPHPExcel->getProperties()->setSubject("Office 2007 XLSX Document");
$objPHPExcel->getProperties()->setDescription("Document for Office 2007 XLSX, generated using PHP classes.");


$debut=$_POST['debut'];
$fin=$_POST['fin'];

//Envoi
//
//BDD
include '../../../config/connexion.php';

$postgres = new connexion();
$conn = $postgres->connect();


//Data
    
    
        $sql = "SELECT DISTINCT case when position('-' in sead.resultat_process.nom_etude)>0 then split_part(sead.resultat_process.nom_etude,' - ',1) else NULL end as societe, case when position('-' in sead.resultat_process.nom_etude)>0 then split_part(sead.resultat_process.nom_etude,' - ',2) else split_part(sead.resultat_process.nom_etude,' - ',1) end as nom,
sead.resultat_process.objectif AS objectif,sead.resultat_process.vitesse_tec AS realise,sead.process.libelle,sead.resultat_process.particularite
            FROM sead.etude,sead.resultat_process,sead.process
        WHERE 
          sead.process.id_process=sead.resultat_process.id_process AND resultat_process.objectif IS NOT NULL AND resultat_process.vitesse_tec IS NOT NULL
          AND resultat_process.reference=etude.reference
            AND sead.etude.date_demande BETWEEN '$debut' AND '$fin'
            GROUP BY resultat_process.nom_etude, resultat_process.objectif, resultat_process.vitesse_tec,process.libelle,resultat_process.particularite
             order by nom";

$dataOut = $postgres->getSQL($conn, $sql);

$date_maitenant = date('Y-m-d');
$objPHPExcel->setActiveSheetIndex(0);

$row = 1;
//Nom des collonnes
$col = 0;

    $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, "Société");
    $col += 1;
    $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, "Nom de l'Etude");
    $col += 1;
    $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, "Process retenu");
    $col += 1;
    $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, "Particularité");
    $col += 1;
    $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, "Objectif de la cadence");
    $col += 1;
    $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, "Realisé");
    $col += 1;
    $max_row = 0;
if (count($dataOut) > 0 && isset($dataOut) && is_array($dataOut)) {
        $row = 2;

        foreach ($dataOut as $value) {

        // var_dump($value);
//        exit();
            $col = 0;
             $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, $value['societe']);
            $col += 1;
            $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, $value['nom']);
            $col += 1;
             $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, $value['libelle']);
            $col += 1;
             $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, $value['particularite']);
            $col += 1;
            $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, $value['objectif']);
            $col += 1;
            $objPHPExcel->getActiveSheet()->setCellValueExplicitByColumnAndRow($col, $row, $value['realise']);
            $max_row = $row;
            $row +=1;

        }
    }
//Fin data

        

   
            
            
    
    






//Fin envoi
//Style center
$style = array(
    'alignment' => array(
        'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
    )
);
//
$sheet = $objPHPExcel->getActiveSheet();
//
//$sheet->getStyle("A1:Q1")->applyFromArray($style);
//Fusion
//$objPHPExcel->getActiveSheet()->mergeCells('A1:H1');
////font size
$objPHPExcel->getActiveSheet()->getStyle("A1:R1")->getFont()->setSize(12);
//$objPHPExcel->getActiveSheet()->getStyle("A3:B3")->getFont()->setSize(16);
//$objPHPExcel->getActiveSheet()->getStyle("H3:N3")->getFont()->setSize(16);
//
////background color
//$sheet->getStyle('A4:H4')->applyFromArray(
//        array(
//            'fill' => array(
//                'type' => PHPExcel_Style_Fill::FILL_SOLID,
//                'color' => array('rgb' => '00BCD4')
//            )
//        )
//);

$styleArray = array(
    'font' => array(
        'bold' => true
    )
);
$sheet->getStyle('A1:R1')->applyFromArray($styleArray);


//size cell
//reception
$sheet->getColumnDimension('A')->setWidth(20);
$sheet->getColumnDimension('B')->setWidth(40);
$sheet->getColumnDimension('C')->setWidth(40);
$sheet->getColumnDimension('D')->setWidth(20);
$sheet->getColumnDimension('E')->setWidth(20);
$sheet->getColumnDimension('F')->setWidth(20);



//Bordures
//$max_row 

for ($i = 1; $i < $max_row; $i++) {
    $ligne = "A$i:R$i";
    $sheet->getStyle($ligne)->getBorders()->applyFromArray(
            array(
                'allborders' => array(
                    'style' => PHPExcel_Style_Border::BORDER_THIN,
                    'color' => array(
                        'rgb' => '808080'
                    )
                )
            )
    );
}

$objPHPExcel->getActiveSheet()->setTitle('Extraction');


// Save Excel 2007 file
$objWriter = new PHPExcel_Writer_Excel2007($objPHPExcel);


$nom_fichier = "ecart_cadence_" . date("dmY") . ".xlsx";

$objWriter->save("../../../temp/" . $nom_fichier);

// Echo done
$tab_sortie = array("nomFichier" => $nom_fichier);
echo json_encode($tab_sortie);
