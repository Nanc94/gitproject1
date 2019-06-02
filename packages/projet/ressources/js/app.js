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

angular.module('raptorApp').factory('test', function ($http) {
    var factory = {
        banner: false,
        blabla: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/projet/model/default.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        situation: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/projet/model/situation.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        demandeur: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/projet/model/demandeur.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },

        situationannuel: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/projet/model/situationannuel.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas, data) {
                        handleData(datas, data);
                    });
        },
        situationannuelp: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/projet/model/situationannuel2.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas, data) {
                        handleData(datas, data);
                    });
        }

    };

    return factory;
});
angular.module('raptorApp').factory('recherche', function ($http) {
    var factory = {
        banner: false,
        liste: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/projet/model/consultation.php',
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
angular.module('raptorApp').factory('creepdfexport', function ($http) {
    var factory = {
        banner: false,
        createPdf: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/projet/model/exportcreepdf.php',
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

angular.module('raptorApp').controller('CtrlTableauBord', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast', 'test', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast, test) {

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
            test.situation(dataObj, function (datas) {        //Ajax
                console.log(datas);
                var chart = new CanvasJS.Chart("chart", {
                    animationEnabled: true,
                    title: {
                        text: "SITUATION GENERALE DES ETUDES"
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

            test.demandeur(dataObj, function (datas) {        //Ajax
                console.log(datas);
                CanvasJS.addColorSet('couleur',
                        [//colorSet Array
                            '#00CED1',
                            '#FFB6C1',
                        ]);
                var chart = new CanvasJS.Chart("chart2", {
                    colorSet: 'couleur',
                    animationEnabled: true,
                    legend: {
                        fontSize: 15
                    },
                    title: {
                        text: "CATEGORIE DES DEMANDES RECUES"
                    },
                    width: 400,
                     height: 250,
                    dataPointWidth: 30,

                    data: [
                        {
                            legend: {
                                cursor: "pointer",
                                itemclick: explodePie,
                            },
                            type: "pie",
                            showInLegend: true,
                            indexLabel: "{y}%",
                            indexLabelFontSize: 16,
                            indexLabelPlacement: "inside",

                            //infobulle
                            toolTipContent: " {name}: {y}%",
                            dataPoints: datas

                        }
                    ]
                });
                //chart.render();
                 //chart.options.data[0].dataPoints = points;

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


                function explodePie(e) {
                    if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
                    } else {
                        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
                    }
                    e.chart.render();

                }
               
            });
            test.situationannuel(dataObj, function (datas) {
                //Ajax
                test.situationannuelp(dataObj, function (data) {
                    console.log(datas, data);
                    chart = new CanvasJS.Chart("chartcontainer3", {
                        title: {
                            text: "BILAN ANNUEL DES ETUDES",
                            fontSize:23,
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
                                name: "Etudes mises en prod ",
                                indexLabel: "{y}",
                                indexLabelFontSize: 16,
                                indexLabelPlacement: "inside",
                                color: "rgba(255,0,0,.7)",
                                dataPoints: datas
                            },
                            {
                                type: "stackedColumn",
                                showInLegend: true,
                                name: "Etudes non mises en prod",
                                indexLabel: "{y}",
                                indexLabelFontSize: 16,
                                indexLabelPlacement: "inside",
                                color: "rgba(36, 209, 109,.6)",
                                dataPoints: data
                            }
                        ]
                    });
                    //console.log(tick);
                    chart.render();

                });
            });


        }


        //Initialisation
        $scope.actionRechercher($scope.modelDebut, $scope.modelFin);



    }]);
angular.module('raptorApp').controller('Ctrlchangerpasse', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast', 'test', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast, test) {

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






    }]);

angular.module('raptorApp').controller('Ctrlconsultation', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast', 'test', 'recherche', 'creepdfexport',function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast, test, recherche,creepdfexport) {
        //TEST CONNEXION ELSE /LOGIN
        //SPECIAL LOGIN //
        $scope.login = $cookieStore.get('login');
        $scope.password = $cookieStore.get('password');
        $rootScope.rootInformation = {};
        $rootScope.rootInformation.nom = $cookieStore.get('nom');
        $rootScope.rootInformation.prenoms = $cookieStore.get('prenoms');
        $rootScope.rootInformation.matricule = $cookieStore.get('login');
        $scope.searchQuery = {keywords: '', filterCategory: ''};
        $scope.suggestions = [];

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

        //EVENT
        // Will not check untill user has entered 2 characters
        $scope.rechercher_nom = function (nom_recherche) {
            $rootScope.modalLoading(true);
            console.log(nom_recherche);
            var dataObj = {
                nom: nom_recherche,
            }
            recherche.liste(dataObj, function (datas) {
                console.log(datas); //json
                $scope.simplementPourDev = datas.datas;
                
                console.log(datas.datas.length);
                if(datas.datas.length > 0)
                {
                    $scope.affiche = true;
                }else{
                    $scope.affiche = false;
                }
                $rootScope.modalLoading(false);

//                app.filter('searchFor', function () {
//                    return function (arr, searchString) {
//                        if (!searchString) {
//                            return arr;
//                        }
//                        var result = [];
//                        searchString = searchString.toLowerCase();
//                        angular.forEach(arr, function (item) {
//                            if (item.title.toLowerCase().indexOf(searchString) !== -1) {
//                                result.push(item);
//                            }
//                        });
//                        return result;
//                    };
//                });

            });
        }
        
        $scope.ficheSelectionnee = "";
        $scope.choix = function(fiche)
        {
            console.log(fiche);
            $scope.ficheSelectionnee = fiche;
            $scope.affiche = false;
            
            $scope.nom_recherche = fiche.nom;
            
        }
        
        
        $scope.afficherListe = function()
        {           
            $scope.affiche = true;
        }
        

        $scope.affiche = false;
    }
]);
angular.module('raptorApp').controller('Ctrlrecherche', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast) {

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
angular.module('raptorApp').controller('Ctrldocumentation', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast) {

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