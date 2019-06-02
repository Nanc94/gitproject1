<!DOCTYPE html>
<html ng-app="raptorApp">
    <head>
        <base href="./" />
        <meta charset="UTF-8">
        <link rel="icon" type="image/png" href="favicon-hi.png" />
        <!-- Angular and module-->
        <script src="plugins/angular/1.4.8/angular.min.js"></script>
        <script src="plugins/angular/1.4.8/angular-route.js"></script>
        <script src="plugins/angular/1.4.8/angular-cookies.js"></script>
        <!-- autosize textarea -->
        <script src="plugins/angular/angular-autogrow.js"></script>

        <!--bootstrap 4 test -->
        <link rel="stylesheet" href="plugins/bootstrap4/css/bootstrap.css"/>
        <script src="plugins/bootstrap4/js/jquery-3.1.1.slim.min.js"></script>
        <script src="plugins/bootstrap4/js/tether.min.js"></script>
        <script src="plugins/bootstrap4/js/bootstrap.min.js" ></script>

        <!-- fin bootstrap 4 test -->
        <!-- bootstrap -->
        <!--        <link rel="stylesheet" href="plugins/bootstrap/css/bootstrap.css">
                <script src="plugins/jquery/jquery-3.2.0.min.js"></script>
                <script src="plugins/bootstrap/js/bootstrap.js"></script>
                <script src="plugins/datepicker3/bootstrap-datepicker.min.js"></script>
                <link id="bsdp-css" href="plugins/datepicker3/bootstrap-datepicker3.min.css" rel="stylesheet">
                <script src="plugins/datepicker3/bootstrap-datepicker.fr.min.js" charset="UTF-8"></script>-->

        <!-- old datepicker -->
        <script src="plugins/datepicker3/bootstrap-datepicker.min.js"></script>
        <link id="bsdp-css" href="plugins/datepicker3/bootstrap-datepicker3.min.css" rel="stylesheet">
        <script src="plugins/datepicker3/bootstrap-datepicker.fr.min.js" charset="UTF-8"></script>
        
        <!-- calendar -->
        <link rel="stylesheet" href="plugins/calendar/fullcalendar.css"/>

        <!-- jquery, moment, and angular have to get included before fullcalendar -->
<!--        <script type="text/javascript" src="plugins/calendar/moment.js"></script>
        <script type="text/javascript" src="plugins/calendar/calendar.js"></script>
        <script type="text/javascript" src="plugins/calendar/fullcalendar.js"></script>
        <script type="text/javascript" src="plugins/calendar/gcal.js"></script>-->
        <!-- Router-->
        <script src="ressources/router.js?version=<?php echo date('Ymdms'); ?>"></script>

        <!-- font awesome -->
        <link rel="stylesheet" href="plugins/font-awesome/css/font-awesome.min.css"/>

        <!-- ngToast -->
        <link rel="stylesheet" href="plugins/ngtoast/ngToast.min.css">
        <script src="plugins/ngtoast/angular-animate.min.js"></script>
        <script src="plugins/ngtoast/angular-sanitize.js"></script>
        <script src="plugins/ngtoast/ngToast.min.js"></script>

        <!-- Auto complete -->
        <link rel="stylesheet" href="plugins/autocomplete/assets/angular-auto-complete.css"/>
        <script src="plugins/autocomplete/scripts/angular-auto-complete.js"></script>
        <script src="plugins/autocomplete/scripts/underscore-min.js"></script>
        <script src="plugins/autocomplete/scripts/angular-sanitize.js"></script>

        <!-- Highlightjs -->
        <link rel="stylesheet" href="plugins/highlight/styles/atelier-dune-dark.css"/>
        <script src="plugins/highlight/highlight.pack.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>
         <!--canvasjs -->
        
        <script src="plugins/canvas/canvasjs.min.js"></script>
        <!-- new datepicker -->
        <link rel="stylesheet" href="plugins/ng-datepicker/src/css/ngDatepicker.css"/>
        <script src="plugins/js/moment.min.js"></script>
        <script src="plugins/ng-datepicker/src/js/ngDatepicker.js"></script>
        <style type="text/css" media="print">
       
            @page 
            {
                size:  auto;   /* auto is the initial value */
                margin: 5mm;  /* this affects the margin in the printer settings */
                padding: 10mm;
            }

            html
            {
                background-color: #FFFFFF; 
                margin: 0px;  /* this affects the margin on the html before sending to printer */
            }

            body
            {
                border: solid 1px white ;
                margin: 10mm 15mm 10mm 15mm; /* margin you want for the content */
            }
        </style>
        <!-- Function PHP -->
        <?php

        function getALLFile($path) {
            $tab_path = [];
            $ignore = array('.', '..', 'cgi-bin', '.DS_Store');
            $files = scandir($path);
            foreach ($files as $t) {
                if (in_array($t, $ignore))
                    continue;

                $diretory = rtrim($path, '/') . '/' . $t;
                $t = utf8_encode($t);
                $diretory = utf8_encode($diretory);

                if (is_dir($diretory)) {
                    $tab_file[] = $t;
                    $tab_path[] = $diretory;
                }
            }

            return array("Chemins" => $tab_path);
        }
        ?>

        <!-- Controller -->
        <?php
        $tab_name = getALLFile("packages")["Chemins"];  //Prendre liste de projet
        foreach ($tab_name as $value) {
            ?>
            <script src="<?php echo $value; ?>/ressources/js/app.js?version=<?php echo date('Ymdms'); ?>"></script>
            <?php
        }
        ?>

        <!-- Titre -->
        <title ng-controller="titleCtrl">{{title}}</title>

        <!-- GLOBAL CSS -->
        <link rel="stylesheet" href="ressources/css/style.css?version=<?php echo date('Ymdms'); ?>">
        <?php
        foreach ($tab_name as $value) {
            ?>
            <link rel="stylesheet" href="<?php echo $value; ?>/ressources/css/style.css?version=<?php echo date('Ymdms'); ?>">
            <?php
        }
        ?>
    </head>

    <body>  <!-- Activer pour mode test -->
        <!--<body oncontextmenu="return false;">--> <!-- Activer pour production -->
        <?php
        include './menu.php';
        ?>
        <div class="main" ng-class="menuSlide">
            <div class="container-fluid" id="container-raptor">
                <div ng-view>
                    <noscript><p class="message-alert">Veuillez activer javascript sur votre navigateur !</p></noscript>
                </div>
            </div>   
        </div>  
        <script type="text/javascript">
            //Show menu           
            document.getElementById("menuRaptor").style.display = 'block';
            //            var checkStatus;
            //            var element = new Image();
            //            element.__defineGetter__('id', function() {
            //            checkStatus = 'Debug on';
            //            });
            //            setInterval(function() {
            //            checkStatus = 'Debug off';
            //            console.log(element);
            //            console.clear();
            //            try{
            //            document.querySelector('#devtool-status').innerHTML = checkStatus;
            //            } catch (e){};
            //            }, 1000);
            //            $(window).keydown(function(event) {
            //            console.log(event.keyCode);
            //            if (event.ctrlKey && event.keyCode == 84) {
            //            console.log("Jouve security");
            //            event.preventDefault();
            //            }
            //            if (event.ctrlKey && event.keyCode == 83) {
            //            console.log("Jouve security");
            //            event.preventDefault();
            //            }
            //            if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
            //            console.log("Jouve security");
            //            event.preventDefault();
            //            }
            //            if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
            //            console.log("Jouve security");
            //            event.preventDefault();
            //            }
            //            });


            function allowDrop(ev) {
                ev.preventDefault();
            }

            function drag(ev) {
                ev.dataTransfer.setData("text", ev.target.id);
            }

            function drop(ev) {
                ev.preventDefault();
                var id_droped = ev.dataTransfer.getData("Text");

                switch (id_droped) {
                    case "myButtonCreate":
                        var nombreBtn = ev.target.getElementsByTagName('button').length;

                        var defBtn = '<button draggable="true" ondragstart="drag(event)" style="margin-left: 0px; margin-top: 0px;" class="btn btn-default btn-generation" id="btn-' + nombreBtn + '">Bouton</button>';
                        var element = htmlToElement(defBtn);
                        ev.target.append(element);
                        break;
                    case "myInputCreate":
                        var nombreInput = ev.target.getElementsByTagName('input').length;

                        var defBtn = '<input type="text" draggable="true" ondragstart="drag(event)" style="margin-left: 0px; margin-top: 0px; width: 300px;" class="form-control input-generation" id="input-' + nombreInput + '" placeholder="Votre text ici"/>';
                        var element = htmlToElement(defBtn);
                        ev.target.append(element);
                        break;
                    case "myLabelCreate":
                        var nombreLabel = ev.target.getElementsByTagName('label').length;

                        var defBtn = '<label draggable="true" ondragstart="drag(event)" style="margin-left: 0px; margin-top: 0px;" class="label-generation" id="label-' + nombreLabel + '" >label</label>';
                        var element = htmlToElement(defBtn);
                        ev.target.append(element);
                        break;
                    case "myTextareaCreate":
                        var nombreTextarea = ev.target.getElementsByTagName('textarea').length;

                        var defBtn = '<textarea draggable="true" ondragstart="drag(event)" style="margin-left: 0px; margin-top: 0px;" class="label-generation" id="textarea-' + nombreTextarea + '" ></textarea>';
                        var element = htmlToElement(defBtn);
                        ev.target.append(element);
                        break;
                    case "myTableCreate":
                        var nombreTable = ev.target.getElementsByTagName('table').length;

                        var defBtn = '<table draggable="true" ondragstart="drag(event)" style="margin-left: 0px; margin-top: 0px; width : 200px;" class="table table-bordered table-generation " id="table-' + nombreTable + '" >' +
                                '<thead>' +
                                '<tr>' +
                                '<th>titre1</th>' +
                                '<th>titre2</th>' +
                                '<th>titre3</th>' +
                                '</tr>' +
                                '</thead>' +
                                '<tbody>' +
                                '<tr>' +
                                '<td>1</td>' +
                                '<td>2</td>' +
                                '<td>3</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td>4</td>' +
                                '<td>5</td>' +
                                '<td>6</td>' +
                                '</tr>' +
                                '</tbody>' +
                                '</table>';
                        var element = htmlToElement(defBtn);
                        ev.target.append(element);
                        break;

                    default:

                        if (id_droped.indexOf('btn') !== -1)
                        {
                            var elToPosition = document.getElementById(id_droped);
                            var mLeft = ev.clientX - 94;
                            var mTop = ev.clientY - 156;

                            var StrLeft = mLeft + "px";
                            var StrTop = mTop + "px";

                            elToPosition.style["margin-left"] = StrLeft;
                            elToPosition.style["margin-top"] = StrTop;
                        }
                        if (id_droped.indexOf('input') !== -1)
                        {
                            var elToPosition = document.getElementById(id_droped);
                            var mLeft = ev.clientX - 94;
                            var mTop = ev.clientY - 156;

                            var StrLeft = mLeft + "px";
                            var StrTop = mTop + "px";

                            elToPosition.style["margin-left"] = StrLeft;
                            elToPosition.style["margin-top"] = StrTop;
                        }
                        if (id_droped.indexOf('label') !== -1)
                        {
                            var elToPosition = document.getElementById(id_droped);
                            var mLeft = ev.clientX - 94;
                            var mTop = ev.clientY - 156;

                            var StrLeft = mLeft + "px";
                            var StrTop = mTop + "px";

                            elToPosition.style["margin-left"] = StrLeft;
                            elToPosition.style["margin-top"] = StrTop;
                        }
                        if (id_droped.indexOf('textarea') !== -1)
                        {
                            var elToPosition = document.getElementById(id_droped);
                            var mLeft = ev.clientX - 94;
                            var mTop = ev.clientY - 156;

                            var StrLeft = mLeft + "px";
                            var StrTop = mTop + "px";

                            elToPosition.style["margin-left"] = StrLeft;
                            elToPosition.style["margin-top"] = StrTop;
                        }
                        if (id_droped.indexOf('table') !== -1)
                        {
                            var elToPosition = document.getElementById(id_droped);
                            var mLeft = ev.clientX - 94;
                            var mTop = ev.clientY - 156;

                            var StrLeft = mLeft + "px";
                            var StrTop = mTop + "px";

                            elToPosition.style["margin-left"] = StrLeft;
                            elToPosition.style["margin-top"] = StrTop;
                        }
                        break;
                }


            }

            function htmlToElement(html) {
                var template = document.createElement('template');
                template.innerHTML = html;
                return template.content.firstChild;
            }


        </script>		
    </body>
</html>