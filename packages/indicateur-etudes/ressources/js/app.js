//FACTORY
angular.module('raptorApp').factory('myPostgres', function ($http) {
    var factory = {
        banner: false,
        getDefautl: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/default/model/default.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        }
    };
    return factory;
});

angular.module('raptorApp').factory('indicateur', function ($http) {
    var factory = {
        banner: false,
        indicateurretard: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/indicateurretard.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        cadencegraphe: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/cadencegraphe.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        qtegraphe: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/qtegraphe.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        grapheclient: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/grapheclient.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        graphedemandeur: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/graphedemandeur.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        listeretard: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/listeretard.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        listecadence: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/listecadence.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
         listeqte: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/listeqte.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
         listedemandeur: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/listedemandeur.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        statistiquedossier: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/statistiquedossier.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        listedossier: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/listedossier.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        listecomplet: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/listecomplet.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        listencomplet: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/ncomplet.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        listetotal: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/listetotal.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        
        
        


    };

    return factory;
});
angular.module('raptorApp').factory('excelexport', function ($http) {
    var factory = {
        banner: false,
        createExcel: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/exportexcel.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        excelcadence: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/excelcadence.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        excelqte: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/indicateur-etudes/model/excelqte.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
    };
    return factory;
});
//Controller par defaut
angular.module('raptorApp').controller('Ctrl1', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout','ngToast', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout,ngToast) {

        //TEST CONNEXION ELSE /LOGIN
        //SPECIAL LOGIN //
        $scope.login = $cookieStore.get('login');
        $scope.password = $cookieStore.get('password');
		
		$rootScope.rootInformation = {};
        $rootScope.rootInformation.nom = $cookieStore.get('nom');
        $rootScope.rootInformation.prenoms = $cookieStore.get('prenoms');
        $rootScope.rootInformation.matricule = $cookieStore.get('login');
		
        if ($scope.login == undefined && $scope.login == undefined) {
            $location.path('/login');
        } else {
            //For banner
            $rootScope.hideYourBannerRoot(true);
            $scope.admindb = $cookieStore.get('admin') == "t";
            if ($scope.admindb) {
                $rootScope.imAdmin(true);                
            } else {
                $rootScope.imAdmin(false);
                $('.menu-admin').remove();
            }
            //end for banner
        }
        // FIN SPECIAL LOGIN //

        $scope.yourName = "Ctrl1";
        $scope.testScript = false;
        // TEST BDD
        // USING MODEL WITH PARSE DATA
        $scope.name = "Name";
        $scope.employees = "Employees";
        $scope.headoffice = "Headoffice";

        var dataObj = {
            name: $scope.name,
            employees: $scope.employees,
            headoffice: $scope.headoffice
        };

        //Fonction utiliser par le module de chargement ou LOADING
        $scope.modalLoading = function (data) {
            if (data) {
                $('.modal-hide').css({
                    'display': 'block'
                });
            } else {
                $('.modal-hide').css({
                    'display': 'none'
                });
            }
        };

        //TEST BDD FACTORY
        myPostgres.getDefautl(dataObj, function (datas) {
            $scope.error = false;
            $scope.datas = datas;
        });

        /*EVENT*/
        $scope.actionShowModal = function ()
        {
            var myModal = $('#myModalDefault');
            myModal.modal('show');
        }

        //Exemple d'utilisation loading
        $scope.showLoading = function ()
        {
            $scope.modalLoading(true);
        }
        $scope.hideLoading = function ()
        {
            $scope.modalLoading(false);
        }
    }]);

angular.module('raptorApp').controller('CtrlIndicateuretudes', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout','ngToast', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout,ngToast) {

        //TEST CONNEXION ELSE /LOGIN
        //SPECIAL LOGIN //
        $scope.login = $cookieStore.get('login');
        $scope.password = $cookieStore.get('password');
		
		$rootScope.rootInformation = {};
        $rootScope.rootInformation.nom = $cookieStore.get('nom');
        $rootScope.rootInformation.prenoms = $cookieStore.get('prenoms');
        $rootScope.rootInformation.matricule = $cookieStore.get('login');
		
        if ($scope.login == undefined && $scope.login == undefined) {
            $location.path('/login');
        } else {
            //For banner
            $rootScope.hideYourBannerRoot(true);
            $scope.admindb = $cookieStore.get('admin') == "t";
            if ($scope.admindb) {
                $rootScope.imAdmin(true);                
            } else {
                $rootScope.imAdmin(false);
                $('.menu-admin').remove();
            }
            //end for banner
        }
        // FIN SPECIAL LOGIN //

        $scope.yourName = "Ctrl1";
        $scope.testScript = false;
        // TEST BDD
        // USING MODEL WITH PARSE DATA
        $scope.name = "Name";
        $scope.employees = "Employees";
        $scope.headoffice = "Headoffice";

        var dataObj = {
            name: $scope.name,
            employees: $scope.employees,
            headoffice: $scope.headoffice
        };

        //Fonction utiliser par le module de chargement ou LOADING
        $scope.modalLoading = function (data) {
            if (data) {
                $('.modal-hide').css({
                    'display': 'block'
                });
            } else {
                $('.modal-hide').css({
                    'display': 'none'
                });
            }
        };

        //TEST BDD FACTORY
        myPostgres.getDefautl(dataObj, function (datas) {
            $scope.error = false;
            $scope.datas = datas;
        });

        /*EVENT*/
        $scope.actionShowModal = function ()
        {
            var myModal = $('#myModalDefault');
            myModal.modal('show');
        }

        //Exemple d'utilisation loading
        $scope.showLoading = function ()
        {
            $scope.modalLoading(true);
        }
        $scope.hideLoading = function ()
        {
            $scope.modalLoading(false);
        }
    }]);
            //indicateur de retard
angular.module('raptorApp').controller('CtrlIndicateurretard', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout','ngToast','indicateur','excelexport', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout,ngToast,indicateur,excelexport) {

        //TEST CONNEXION ELSE /LOGIN
        //SPECIAL LOGIN //
        $scope.login = $cookieStore.get('login');
        $scope.password = $cookieStore.get('password');
        
        $rootScope.rootInformation = {};
        $rootScope.rootInformation.nom = $cookieStore.get('nom');
        $rootScope.rootInformation.prenoms = $cookieStore.get('prenoms');
        $rootScope.rootInformation.matricule = $cookieStore.get('login');
        
        if ($scope.login == undefined && $scope.login == undefined) {
            $location.path('/login');
        } else {
            //For banner
            $rootScope.hideYourBannerRoot(true);
            $scope.admindb = $cookieStore.get('admin') == "t";
            if ($scope.admindb) {
                $rootScope.imAdmin(true);                
            } else {
                $rootScope.imAdmin(false);
                $('.menu-admin').remove();
            }
            //end for banner
        }
        // FIN SPECIAL LOGIN //

        $scope.yourName = "Ctrl1";
        $scope.testScript = false;
        // TEST BDD
        // USING MODEL WITH PARSE DATA
        $scope.name = "Name";
        $scope.employees = "Employees";
        $scope.headoffice = "Headoffice";

        var dataObj = {
            name: $scope.name,
            employees: $scope.employees,
            headoffice: $scope.headoffice
        };

        //Fonction utiliser par le module de chargement ou LOADING
        $scope.modalLoading = function (data) {
            if (data) {
                $('.modal-hide').css({
                    'display': 'block'
                });
            } else {
                $('.modal-hide').css({
                    'display': 'none'
                });
            }
        };

        //TEST BDD FACTORY
        myPostgres.getDefautl(dataObj, function (datas) {
            $scope.error = false;
            $scope.datas = datas;
        });

        /*EVENT*/
        $scope.actionShowModal = function ()
        {
            var myModal = $('#myModalDefault');
            myModal.modal('show');
        }

        //Exemple d'utilisation loading
        $scope.showLoading = function ()
        {
            $scope.modalLoading(true);
        }
        $scope.hideLoading = function ()
        {
            $scope.modalLoading(false);
        }

         //Funciton javascript 
        function dateJour(date) {
            var year = date.getFullYear();

            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;

            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;

            return day + '/' + month + '/' + year;
        }
        function dateDebut(date) {
            var year = date.getFullYear();

            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;

            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;

            return '01/' + month + '/' + year;
        }

        $scope.modelDebut = dateDebut(new Date());
        $scope.modelFin = dateJour(new Date());
        //$scope.message=datas.lenght==0;

        $scope.chart = null;
        $scope.chart2 = null;
        $scope.actionRechercher = function (deb, fin)
        {
            //alert(deb+' et '+fin);
            var debut = deb;
            var fin = fin;
            var dataObj = {
                debut: debut,
                fin: fin
            };
            indicateur.indicateurretard(dataObj, function (datas) {        //Ajax
                console.log(datas);
                 CanvasJS.addColorSet('couleur',
                        [//colorSet Array
                            '#87CEEB',
                            '#FF69B4',
                        ]);
                var chart = new CanvasJS.Chart("chart1", {
                     colorSet: 'couleur',
                     //theme: "theme1",
                     title:{
                     text: "INDICATEURS DE RETARD"
                     },
                     width:500,
                     height:300,
     
                     legend:{
                    cursor: "pointer",
                    itemclick: explodePie,
                    fontSize: 15,
                    fontColor: "dimGrey",
                    },
    //exportFileName: "Pourcentage des dossiers etudiés obtenus",
    
                    animationEnabled: true,
    
                     data: [
                    {       
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "{y}",
                    indexLabel: "{y}",
                    indexLabelPlacement: "inside",
                    indexLabelFontColor: "black",
        // indexLabel: "{name}",
        
                    dataPoints: datas
            }]
            });
               var testNull = true;

         console.log(datas);

//                for (var i in datas) {
                for (var i = 0; i < datas.length ; i++){

                //for (var i in datas) {
                    if(datas[i].y != 0)
                    {
                        testNull = false;
                        break;
                    }
                }

                if (testNull)
                {
                    showDefaultText(chart, "Pas de données disponibles");    
                } else {
                    showDefaultText(chart, "");    
                }


                
                chart.render();
 
                function showDefaultText(chart, text){
        
                var isEmpty = !(chart.options.data[0].data && chart.options.data[0].data.length > 0);
  
                 if(!chart.options.subtitles)
                    (chart.options.subtitles = []);
   
                if(isEmpty)
                    chart.options.subtitles.push({
                    text : text,
                    verticalAlign : 'center',
                    fontColor:'black',
                    backgroundColor:'#DCDCDC',
                    fontSize:15,
                    
                });
                 else
                (chart.options.subtitles = []);
                }


function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart1.render();

}


            });
            indicateur.listeretard(dataObj, function (datas) {        //Ajax
                console.log(datas);
                 $scope.names = datas;
            });
        }
        //Initialisation
        $scope.actionRechercher($scope.modelDebut, $scope.modelFin);

        $scope.modelDebut = dateDebut(new Date());
        $scope.modelFin = dateJour(new Date());
         $scope.export = function (deb,fin)
        {
           var debut = deb;
            var fin = fin;
            var dataObj = {
                debut: debut,
                fin: fin
            };
               excelexport.createExcel(dataObj, function (datas) {
                console.log(datas);
                var url = window.location.origin + window.location.pathname;
                 window.location = url + 'temp/' + datas.nomFichier;
            });
        }
        //Initialisation
        $scope.actionRechercher($scope.modelDebut, $scope.modelFin);
         
        



    }]);

// Suivi Performance
angular.module('raptorApp').controller('CtrlSuiviPerformance', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout','ngToast','indicateur','excelexport', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout,ngToast,indicateur,excelexport) {

        //TEST CONNEXION ELSE /LOGIN
        //SPECIAL LOGIN //
        $scope.login = $cookieStore.get('login');
        $scope.password = $cookieStore.get('password');
        
        $rootScope.rootInformation = {};
        $rootScope.rootInformation.nom = $cookieStore.get('nom');
        $rootScope.rootInformation.prenoms = $cookieStore.get('prenoms');
        $rootScope.rootInformation.matricule = $cookieStore.get('login');
        
        if ($scope.login == undefined && $scope.login == undefined) {
            $location.path('/login');
        } else {
            //For banner
            $rootScope.hideYourBannerRoot(true);
            $scope.admindb = $cookieStore.get('admin') == "t";
            if ($scope.admindb) {
                $rootScope.imAdmin(true);                
            } else {
                $rootScope.imAdmin(false);
                $('.menu-admin').remove();
            }
            //end for banner
        }
        // FIN SPECIAL LOGIN //

        $scope.yourName = "Ctrl1";
        $scope.testScript = false;
        // TEST BDD
        // USING MODEL WITH PARSE DATA
        $scope.name = "Name";
        $scope.employees = "Employees";
        $scope.headoffice = "Headoffice";

        var dataObj = {
            name: $scope.name,
            employees: $scope.employees,
            headoffice: $scope.headoffice
        };

        //Fonction utiliser par le module de chargement ou LOADING
        $scope.modalLoading = function (data) {
            if (data) {
                $('.modal-hide').css({
                    'display': 'block'
                });
            } else {
                $('.modal-hide').css({
                    'display': 'none'
                });
            }
        };

        //TEST BDD FACTORY
        myPostgres.getDefautl(dataObj, function (datas) {
            $scope.error = false;
            $scope.datas = datas;
        });

        /*EVENT*/
        $scope.actionShowModal = function ()
        {
            var myModal = $('#myModalDefault');
            myModal.modal('show');
        }

        //Exemple d'utilisation loading
        $scope.showLoading = function ()
        {
            $scope.modalLoading(true);
        }
        $scope.hideLoading = function ()
        {
            $scope.modalLoading(false);
        }

         //Funciton javascript 
        function dateJour(date) {
            var year = date.getFullYear();

            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;

            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;

            return day + '/' + month + '/' + year;
        }
        function dateDebut(date) {
            var year = date.getFullYear();

            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;

            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;

            return '01/' + month + '/' + year;
        }

        $scope.modelDebut = dateDebut(new Date());
        $scope.modelFin = dateJour(new Date());
        $scope.chart = null;
        $scope.chart2 = null;
        $scope.actionRechercher = function (deb, fin)
        {
            //alert(deb+' et '+fin);
            var debut = deb;
            var fin = fin;
            var dataObj = {
                debut: debut,
                fin: fin
            };
            indicateur.cadencegraphe(dataObj, function (datas) {        //Ajax
                
                CanvasJS.addColorSet('couleur',
                        [//colorSet Array
                            '#FF69B4',
                            '#87CEEB'
                        ]);
                var chart = new CanvasJS.Chart("chart1", {
                //theme: "theme1",
                 colorSet: 'couleur',
                title:{
                text: "ECART DE LA CADENCE"
                },
                width:400,
                height:300,
     
                legend:{
                    cursor: "pointer",
                    itemclick: explodePie,
                    fontSize: 15,
                    fontColor: "dimGrey",
                   
                    },
    //exportFileName: "Pourcentage des dossiers etudiés obtenus",
    
                animationEnabled: true,
    
                data: [
                {       
                type: "pie",
                showInLegend: true,
                toolTipContent: "{y}",
                indexLabel: "{y}",
                indexLabelPlacement: "inside",
                indexLabelFontColor: "black",
        //indexLabel: "{name}",
        
                dataPoints: datas
            }]
        });

                       var testNull = true;

         console.log(datas);

//                for (var i in datas) {
                for (var i = 0; i < datas.length ; i++){

                //for (var i in datas) {
                    if(datas[i].y != 0)
                    {
                        testNull = false;
                        break;
                    }
                }

                if (testNull)
                {
                    showDefaultText(chart, "Pas de données disponibles");    
                } else {
                    showDefaultText(chart, "");    
                }


                
                chart.render();
 
                function showDefaultText(chart, text){
        
                var isEmpty = !(chart.options.data[0].data && chart.options.data[0].data.length > 0);
  
                 if(!chart.options.subtitles)
                    (chart.options.subtitles = []);
   
                if(isEmpty)
                    chart.options.subtitles.push({
                    text : text,
                    verticalAlign : 'center',
                    fontColor:'black',
                    backgroundColor:'#DCDCDC',
                    fontSize:15,
                    
                });
                 else
                (chart.options.subtitles = []);
                }


        
    function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();

}
                
});

             indicateur.qtegraphe(dataObj, function (datas) {        //Ajax
                console.log(datas);
                CanvasJS.addColorSet('couleur',
                        [//colorSet Array
                            '#FF69B4',
                            '#87CEEB'
                            
                        ]);
                 var chart = new CanvasJS.Chart("chart2", {
                colorSet: 'couleur',
                
                title:{
                text: "ECART DE LA QUALITE"
                },
                width:400,
                height:300,
     
                legend:{
                    cursor: "pointer",
                    itemclick: explodePie,
                    fontSize: 15,
                    fontColor: "dimGrey",
                    
                    },
    //exportFileName: "Pourcentage des dossiers etudiés obtenus",
    
                animationEnabled: true,
    
                data: [
                {       
                type: "pie",
                showInLegend: true,
                toolTipContent: "{y}",
                 indexLabel: "{y}",
                indexLabelPlacement: "inside",
                indexLabelFontColor: "black",
        //indexLabel: "{name}",
        
                dataPoints: datas
            }]
        });
         var testNull = true;

         console.log(datas);

//                for (var i in datas) {
                for (var i = 0; i < datas.length ; i++){

                //for (var i in datas) {
                    if(datas[i].y != 0)
                    {
                        testNull = false;
                        break;
                    }
                }

                if (testNull)
                {
                    showDefaultText(chart, "Pas de données disponibles");    
                } else {
                    showDefaultText(chart, "");    
                }


                
                chart.render();
 
                function showDefaultText(chart, text){
        
                var isEmpty = !(chart.options.data[0].data && chart.options.data[0].data.length > 0);
  
                 if(!chart.options.subtitles)
                    (chart.options.subtitles = []);
   
                if(isEmpty)
                    chart.options.subtitles.push({
                    text : text,
                    verticalAlign : 'center',
                    fontColor:'black',
                    backgroundColor:'#DCDCDC',
                    fontSize:15,
                    
                });
                 else
                (chart.options.subtitles = []);
                }


        
    function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();

}

                
            });
                indicateur.listecadence(dataObj, function (datas) {        //Ajax
                console.log(datas);
                 $scope.names = datas;
            });
                 indicateur.listeqte(dataObj, function (datas) {        //Ajax
                console.log(datas);
                 $scope.nom = datas;
            });

        }
         $scope.modelDebut = dateDebut(new Date());
        $scope.modelFin = dateJour(new Date());
         $scope.export = function (deb,fin)
        {
           var debut = deb;
            var fin = fin;
            var dataObj = {
                debut: debut,
                fin: fin
            };
               excelexport.excelcadence(dataObj, function (datas) {
                console.log(datas);
                var url = window.location.origin + window.location.pathname;
                 window.location = url + 'temp/' + datas.nomFichier;
            });
        }
        $scope.modelDebut = dateDebut(new Date());
        $scope.modelFin = dateJour(new Date());
         $scope.export2 = function (deb,fin)
        {
           var debut = deb;
            var fin = fin;
            var dataObj = {
                debut: debut,
                fin: fin
            };
               excelexport.excelqte(dataObj, function (datas) {
                console.log(datas);
                var url = window.location.origin + window.location.pathname;
                 window.location = url + 'temp/' + datas.nomFichier;
            });
        }
        //Initialisation
        $scope.actionRechercher($scope.modelDebut, $scope.modelFin);
         
         
        //Initialisation
        $scope.actionRechercher($scope.modelDebut, $scope.modelFin);


        
        
    }]);

// Situation Annuel
angular.module('raptorApp').controller('CtrlSituationAnnuel', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout','ngToast','indicateur', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout,ngToast,indicateur) {

        //TEST CONNEXION ELSE /LOGIN
        //SPECIAL LOGIN //
        $scope.login = $cookieStore.get('login');
        $scope.password = $cookieStore.get('password');
        
        $rootScope.rootInformation = {};
        $rootScope.rootInformation.nom = $cookieStore.get('nom');
        $rootScope.rootInformation.prenoms = $cookieStore.get('prenoms');
        $rootScope.rootInformation.matricule = $cookieStore.get('login');
        
        if ($scope.login == undefined && $scope.login == undefined) {
            $location.path('/login');
        } else {
            //For banner
            $rootScope.hideYourBannerRoot(true);
            $scope.admindb = $cookieStore.get('admin') == "t";
            if ($scope.admindb) {
                $rootScope.imAdmin(true);                
            } else {
                $rootScope.imAdmin(false);
                $('.menu-admin').remove();
            }
            //end for banner
        }
        // FIN SPECIAL LOGIN //

        $scope.yourName = "Ctrl1";
        $scope.testScript = false;
        // TEST BDD
        // USING MODEL WITH PARSE DATA
        $scope.name = "Name";
        $scope.employees = "Employees";
        $scope.headoffice = "Headoffice";

        var dataObj = {
            name: $scope.name,
            employees: $scope.employees,
            headoffice: $scope.headoffice
        };

        //Fonction utiliser par le module de chargement ou LOADING
        $scope.modalLoading = function (data) {
            if (data) {
                $('.modal-hide').css({
                    'display': 'block'
                });
            } else {
                $('.modal-hide').css({
                    'display': 'none'
                });
            }
        };

        //TEST BDD FACTORY
        myPostgres.getDefautl(dataObj, function (datas) {
            $scope.error = false;
            $scope.datas = datas;
        });

        /*EVENT*/
        $scope.actionShowModal = function ()
        {
            var myModal = $('#myModalDefault');
            myModal.modal('show');
        }

        //Exemple d'utilisation loading
        $scope.showLoading = function ()
        {
            $scope.modalLoading(true);
        }
        $scope.hideLoading = function ()
        {
            $scope.modalLoading(false);
        }
        //Funciton javascript 
        function dateJour(date) {
            var year = date.getFullYear();

            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;

            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;

            return day + '/' + month + '/' + year;
        }
        function dateDebut(date) {
            var year = date.getFullYear();

            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;

            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;

            return '01/' + month + '/' + year;
        }

        $scope.modelDebut = dateDebut(new Date());
        $scope.modelFin = dateJour(new Date());
        $scope.chart = null;
        $scope.chart2 = null;
        $scope.actionRechercher = function (deb, fin)
        {
            //alert(deb+' et '+fin);
            var debut = deb;
            var fin = fin;
            var dataObj = {
                debut: debut,
                fin: fin
            };

            indicateur.grapheclient(dataObj, function (datas) {
                        //Ajax
            indicateur.graphedemandeur(dataObj, function (data){
                console.log(datas,data);
                 chart = new CanvasJS.Chart("chart1",{
                    title: {
                        text: "SITUATION ANNUEL DES DEMANDEURS"
                    },
                    animationEnabled: true,
                        axisY: {
                        includeZero: false,
                        //prefix: " ",
                        labelFontSize: 15
                    },
                    toolTip: {
                        shared: true,
                        content: "<span style='\"'color: {color};'\"'><strong>{name}</strong></span> <span style='\"'color: dimgrey;'\"'>{y}</span><br><span style='\"'color: {color};'\"'><strong>{label}</strong></span> "
                    },
                    legend: {
                        fontSize: 13
                    },
                    data: [
                        {
                            type: "stackedColumn",
                            showInLegend: true,
                            name: "CLIENTS",
                            indexLabel: "{y}",
                            indexLabelFontSize: 16,
                            indexLabelFontColor: "black",
                            indexLabelPlacement: "inside",
                            color: "rgba(255,0,0,.7)",
                            dataPoints:datas
                        },
                        {
                            type: "stackedColumn",
                            showInLegend: true,
                            name: "DEMANDEURS",
                            indexLabel: "{y}",
                            indexLabelFontSize: 16,
                            indexLabelFontColor: "black",
                            indexLabelPlacement: "inside",
                            color: "rgba(36, 209, 109,.6)",
                            dataPoints:data
                        }
                    ]
                }); 
                //console.log(tick);
                chart.render();
            
            });
            });
             indicateur.listedemandeur(dataObj, function (datas) {        //Ajax
                console.log(datas);
                 $scope.names = datas;
            });

        }
         //Initialisation
        $scope.actionRechercher($scope.modelDebut, $scope.modelFin);


           




    }]);

// Statistique des dossiers remis
angular.module('raptorApp').controller('CtrlStatistiqueDossier', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout','ngToast','indicateur', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout,ngToast,indicateur) {

        //TEST CONNEXION ELSE /LOGIN
        //SPECIAL LOGIN //
        $scope.login = $cookieStore.get('login');
        $scope.password = $cookieStore.get('password');
        
        $rootScope.rootInformation = {};
        $rootScope.rootInformation.nom = $cookieStore.get('nom');
        $rootScope.rootInformation.prenoms = $cookieStore.get('prenoms');
        $rootScope.rootInformation.matricule = $cookieStore.get('login');
        
        if ($scope.login == undefined && $scope.login == undefined) {
            $location.path('/login');
        } else {
            //For banner
            $rootScope.hideYourBannerRoot(true);
            $scope.admindb = $cookieStore.get('admin') == "t";
            if ($scope.admindb) {
                $rootScope.imAdmin(true);                
            } else {
                $rootScope.imAdmin(false);
                $('.menu-admin').remove();
            }
            //end for banner
        }
        // FIN SPECIAL LOGIN //

        $scope.yourName = "Ctrl1";
        $scope.testScript = false;
        // TEST BDD
        // USING MODEL WITH PARSE DATA
        $scope.name = "Name";
        $scope.employees = "Employees";
        $scope.headoffice = "Headoffice";

        var dataObj = {
            name: $scope.name,
            employees: $scope.employees,
            headoffice: $scope.headoffice
        };

        //Fonction utiliser par le module de chargement ou LOADING
        $scope.modalLoading = function (data) {
            if (data) {
                $('.modal-hide').css({
                    'display': 'block'
                });
            } else {
                $('.modal-hide').css({
                    'display': 'none'
                });
            }
        };

        //TEST BDD FACTORY
        myPostgres.getDefautl(dataObj, function (datas) {
            $scope.error = false;
            $scope.datas = datas;
        });

        /*EVENT*/
        $scope.actionShowModal = function ()
        {
            var myModal = $('#myModalDefault');
            myModal.modal('show');
        }

        //Exemple d'utilisation loading
        $scope.showLoading = function ()
        {
            $scope.modalLoading(true);
        }
        $scope.hideLoading = function ()
        {
            $scope.modalLoading(false);
        }

         //Funciton javascript 
        function dateJour(date) {
            var year = date.getFullYear();

            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;

            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;

            return day + '/' + month + '/' + year;
        }
        function dateDebut(date) {
            var year = date.getFullYear();

            var month = (1 + date.getMonth()).toString();
            month = month.length > 1 ? month : '0' + month;

            var day = date.getDate().toString();
            day = day.length > 1 ? day : '0' + day;

            return '01/' + month + '/' + year;
        }

        $scope.modelDebut = dateDebut(new Date());
        $scope.modelFin = dateJour(new Date());
        $scope.chart = null;
        $scope.chart2 = null;
        $scope.actionRechercher = function (deb, fin)
        {
            //alert(deb+' et '+fin);
            var debut = deb;
            var fin = fin;
            var dataObj = {
                debut: debut,
                fin: fin
            };
            indicateur.statistiquedossier(dataObj, function (datas) {        //Ajax
                console.log(datas);
                CanvasJS.addColorSet('couleur',
                        [//colorSet Array
                             '#FF69B4',
                            '#87CEEB'
                        ]);
                var chart = new CanvasJS.Chart("chart1", {
                    colorSet: 'couleur',
                    theme: "theme1",
                    title:{
                    text: "STATISTIQUE DES DOSSIERS REMIS"
                    },
                    width:500,
                    height:300,
                     axisX: {
                        includeZero: true,
                        //prefix: " ",
                        labelfontColor: "black",
                    },
     
                    legend:{
                    cursor: "pointer",
                    itemclick: explodePie,
                    fontSize: 15,
                    fontColor: "black",
                    //horizontalAlign: "right",
                    //verticalAlign: "center",
                    },

    //exportFileName: "Pourcentage des dossiers etudiés obtenus",
    
                    animationEnabled: true,
    
                    data: [
                    {       
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "{y}%",
                    indexLabel: "{y}%",
                    indexLabelPlacement: "inside",
                    indexLabelFontColor: "black",

        // indexLabel: "{name}",
        
                    dataPoints: datas
                    }]
                    });

               
                //chart.render();
                var testNull = true;
                for (var i in datas) {
                    if(datas[i].y != undefined)
                    {
                        testNull = false;
                        break;
                    }
                }

                if (testNull)
                {
                    showDefaultText(chart, "Pas de données disponibles");    
                } else {
                    showDefaultText(chart, "");    
                }
                
                
                chart.render();
 
                function showDefaultText(chart, text){
        
                var isEmpty = !(chart.options.data[0].data && chart.options.data[0].data.length > 0);
  
                 if(!chart.options.subtitles)
                    (chart.options.subtitles = []);
   
                if(isEmpty)
                    chart.options.subtitles.push({
                    text : text,
                    verticalAlign : 'center',
                    fontColor:'black',
                    backgroundColor:'#DCDCDC',
                    fontSize:15,
                    
                });
                 else
                (chart.options.subtitles = []);
                }
                
                

function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();

}


            });
            indicateur.listedossier(dataObj, function (datas) {        //Ajax
                console.log(datas);
                 $scope.names = datas;
            });
        }
         $scope.voirDetail1 = function(modelDebut,modelFin,complet){

            var dataObj = {
                                debut: modelDebut,
                                fin: modelFin,
                                complet: complet
                           };
            indicateur.listecomplet(dataObj,function(datas){
                //console.log(datas);
               $scope.listgroupesd = datas.datas;

               //listgroupesd
            });
        }
         $scope.voirDetail2 = function(modelDebut,modelFin,ncomplet){

            var dataObj = {
                                debut: modelDebut,
                                fin: modelFin,
                                ncomplet: ncomplet
                           };
            indicateur.listencomplet(dataObj,function(datas){
                //console.log(datas);
               $scope.listgroupesd = datas.datas;

               //listgroupesd
            });
        }
         $scope.voirDetail3 = function(modelDebut,modelFin,nbtotal){

            var dataObj = {
                                debut: modelDebut,
                                fin: modelFin,
                                nbtotal: nbtotal
                           };
            indicateur.listetotal(dataObj,function(datas){
                //console.log(datas);
               $scope.listgroupesd = datas.datas;

               //listgroupesd
            });
        }
        //Initialisation
        $scope.actionRechercher($scope.modelDebut, $scope.modelFin);
    }]);


/*
//Directive modale
app.directive('ngModaldefault', function () {
    return {
        restrict: 'A', 
        templateUrl: 'packages/default/views/templateDefaultModal.html',
        link: function (scope, element, attrs) {
            $(element).on('hidden.bs.modal', function () {
                try {
                    //$scope.verificationAjourFournisseur = "";                    
                } catch (e) {
                }
            });
        }
    }
});
//Directive modale
app.directive('ngModaldloader', function () {
    return {
        restrict: 'A', 
        template: '<div class="modal-hide"></div>',
        link: function (scope, element, attrs) {
            $(element).on('hidden.bs.modal', function () {
                try {
                } catch (e) {
                }
            });

        }
    }
});

//Directive modale
app.directive('ngDatepicker', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).datepicker({
                todayBtn: true,
                language: "fr",
                autoclose: true
            });
        }
    }
});
 app.directive('ngNumeric', function(){
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {

            modelCtrl.$parsers.push(function (inputValue) {
                var transformedInput = inputValue ? inputValue.replace(/[^\d.-]/g,'') : null;

                if (transformedInput!=inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };
});
 **/