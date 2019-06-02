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
angular.module('raptorApp').factory('avance', function ($http) {
    var factory = {
        banner: false,
        avanceencours: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/avance-etudes/model/avanceencours.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        avanceglobale: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/avance-etudes/model/avanceglobale.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        listeencours: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/avance-etudes/model/listeencours.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        listeglobal: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/avance-etudes/model/listglobale.php',
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
angular.module('raptorApp').factory('exporter', function ($http) {
    var factory = {
        banner: false,
        excelglobal: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/avance-etudes/model/excelglobal.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        excelencours: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/avance-etudes/model/excelencours.php',
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
angular.module('raptorApp').controller('Ctrl1', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast) {

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

angular.module('raptorApp').controller('CtrlAvanceetudes', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast) {

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

angular.module('raptorApp').controller('CtrlAvanceglobale', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast','test','avance','exporter', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast,test,avance,exporter) {

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

        
        //recuperer date debut et fin
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

        //Events
        $scope.actionRechercher = function (deb, fin)
        {
            //alert(deb+' et '+fin);
            var debut = deb;
            var fin = fin;
            var dataObj = {
                debut: debut,
                fin: fin
            };
            test.situation(dataObj, function (datas) {        //Ajax
                console.log(datas);
                var chart = new CanvasJS.Chart("chart", {
                    animationEnabled: true,
                    title: {
                        text: "SITUATION ACTUELLES DES ETUDES"
                    },
                    backgroundColor: "#DCDCDC",
                    width: 850,
                    height: 250,
                    dataPointWidth: 20,
                    axisX: {
                        labelFontSize: 15,
                        labelFontColor: "black",
                    },
                    data: [
                        {
                            //showInLegend: true,
                            type: "column",
                            indexLabel: "{y}",
                            indexLabelFontSize: 16,
                            dataPoints: datas
                        }
                    ]
                });
                chart.render();


            });

             avance.avanceglobale(dataObj, function (datas) {        //Ajax
                console.log(datas);
                 $scope.users = datas;

                });



        }
        $scope.voirDetail = function(modelDebut,modelFin,libelle){

            var dataObj = {
                                debut: modelDebut,
                                fin: modelFin,
                                libelle: libelle
                           };
            avance.listeglobal(dataObj,function(datas){
                console.log(datas);
               $scope.listgroupesd = datas.datas;

               listgroupesd
            });
        }

        $scope.modelDebut = dateDebut(new Date());
        $scope.modelFin = dateJour(new Date());
         $scope.export = function (deb,fin,libelle)
        {
           var debut = deb;
            var fin = fin;
            var libelle=libelle;
            var dataObj = {
                debut: debut,
                fin: fin,
                libelle:libelle
            };
               exporter.excelglobal(dataObj, function (datas) {
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
angular.module('raptorApp').controller('CtrlAvanceencours', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast','test','avance','exporter', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast,test,avance,exporter) {

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

        //recuperer date debut et fin
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
        $scope.actionRechercher = function (deb, fin)
        {
            //alert(deb+' et '+fin);
            var debut = deb;
            var fin = fin;
            var dataObj = {
                debut: debut,
                fin: fin
            };
            avance.avanceencours(dataObj, function (datas) {        //Ajax
                console.log(datas);
                CanvasJS.addColorSet('couleur',
                        [//colorSet Array
                            '#FF69B4',
                            '#87CEEB'
                        ]);
               var chart = new CanvasJS.Chart("chart", {
                colorSet: 'couleur',
                title:{
                text: "LISTE DES ETUDES EN COURS"
                },
                width:500,
                height:300,
     
                legend:{
                cursor: "pointer",
                itemclick: explodePie,
                fontSize: 15,
                fontColor: "dimGrey",
                },
    
                animationEnabled: true,
    
                data: [
                {       
                type: "pie",
                showInLegend: true,
                toolTipContent: "{y}",
                indexLabel: "{y}",
                indexLabelPlacement: "inside",
                indexLabelFontColor: "black",
        
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
             avance.listeencours(dataObj, function (datas) {        //Ajax
                console.log(datas);
                 $scope.names = datas;

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
               exporter.excelencours(dataObj, function (datas) {
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