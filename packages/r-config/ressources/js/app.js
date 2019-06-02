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

angular.module('raptorApp').factory('fontawesome', function ($http) {
    var factory = {
        banner: false,
        getListe: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-config/model/listfontawesome.php',
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


angular.module('raptorApp').factory('menuraptor', function ($http) {
    var factory = {
        banner: false,
        getListe: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-config/model/listmenu.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        ajout: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-config/model/menuajout.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        supprimer: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-config/model/menusupprimer.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });

        },
        modifier: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-config/model/menumodif.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        haut: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-config/model/menuhaut.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        bas: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-config/model/menubas.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        droite: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-config/model/menudroite.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        gauche: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-config/model/menugauche.php',
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
angular.module('raptorApp').controller('Ctrl1', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout) {

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


angular.module('raptorApp').controller('CtrlRConfig', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast', 'fontawesome', 'menuraptor', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast, fontawesome, menuraptor) {

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
            if ($scope.admindb)
                $rootScope.imAdmin(true);
            else
                $rootScope.imAdmin(false);
            //end for banner
        }
        // FIN SPECIAL LOGIN //

        //Initialisation
        $scope.createmenu = {};
        $scope.createmenu.libelle = "";
        $scope.createmenu.niveau = "";
        $scope.createmenu.url = "";
        $scope.createmenu.variable_associe = "";
        $scope.createmenu.icon = "";


        $scope.afficherLesFontAwesome = function () {
            var dataObj = {};
            fontawesome.getListe(dataObj, function (datas) {
                var icons = datas.fontawesome;

                $scope.fontawesomeicons = [];
                for (var item in icons) {

                    $scope.fontawesomeicons.push(icons[item]);
                }
            });
        };

        //Afficher modal fontawesome
        $scope.voirIconFontAwesome = function ()
        {
            var modalFontAwesome = $('#myModalFontawesome');
            modalFontAwesome.modal('show');
        }

        $scope.menuEncours = {};
        $scope.voirIconFontAwesomeMenu = function (menu)
        {
            var modalFontAwesome = $('#myModalFontawesomemenu');
            modalFontAwesome.modal('show');
            $scope.menuEncours = menu;
        }

        $scope.prendreIcon = function (icon) {


            $scope.createmenu.icon = '<i class="fa ' + icon + '" aria-hidden="true"></i> ';
        }

        $scope.prendreIconMenu = function (icon) {
//            console.log($scope.menuEncours);

            for (var item in $scope.listeDesMenus) {
                if ($scope.listeDesMenus[item] == $scope.menuEncours)
                {
//                    console.log($scope.menuEncours); 
                    $scope.menuEncours.icon = '<i class="fa ' + icon + '" aria-hidden="true"></i> ';
                }
            }
        }

        $scope.afficherListeMenu = function () {
            var dataObj = {};
            menuraptor.getListe(dataObj, function (datas) {
                console.log(datas);
                $scope.listeDesMenus = datas;
            });
        }
        /*Evenement*/
        $scope.ajouterMenu = function (createmenu)
        {
            var dataObj = createmenu;
            menuraptor.ajout(dataObj, function (datas) {
                ngToast.create({
                    className: datas.notification,
                    content: '<b>' + datas.message + '</b>'
                });

                $scope.afficherListeMenu();
            });

        }
        $scope.supprimerMenu = function (createmenu)
        {
            var dataObj = createmenu;
            menuraptor.supprimer(dataObj, function (datas) {
                ngToast.create({
                    className: datas.notification,
                    content: '<b>' + datas.message + '</b>'
                });

                $scope.afficherListeMenu();
            });

        }
        $scope.enregistrerMenu = function (modifmenu)
        {
            var dataObj = modifmenu;
            menuraptor.modifier(dataObj, function (datas) {
                console.log(datas);
                ngToast.create({
                    className: datas.notification,
                    content: '<b>' + datas.message + '</b>'
                });

                $scope.afficherListeMenu();
            });
        }
        //Direction
        $scope.hautMenu = function (modifmenu)
        {
            var dataObj = modifmenu;
            menuraptor.haut(dataObj, function (datas) {
                console.log(datas);
                ngToast.create({
                    className: datas.notification,
                    content: '<b>' + datas.message + '</b>'
                });

                $scope.afficherListeMenu();
            });
        }
        $scope.basMenu = function (modifmenu)
        {
            var dataObj = modifmenu;
            menuraptor.bas(dataObj, function (datas) {
                console.log(datas);
                ngToast.create({
                    className: datas.notification,
                    content: '<b>' + datas.message + '</b>'
                });

                $scope.afficherListeMenu();
            });
        }
        $scope.droiteMenu = function (modifmenu)
        {
            var dataObj = modifmenu;
            menuraptor.droite(dataObj, function (datas) {
                console.log(datas);
                ngToast.create({
                    className: datas.notification,
                    content: '<b>' + datas.message + '</b>'
                });

                $scope.afficherListeMenu();
            });
        }
        $scope.gaucheMenu = function (modifmenu)
        {
            var dataObj = modifmenu;
            menuraptor.gauche(dataObj, function (datas) {
                console.log(datas);
                ngToast.create({
                    className: datas.notification,
                    content: '<b>' + datas.message + '</b>'
                });

                $scope.afficherListeMenu();
            });
        }

        //Initialisation appele
        $scope.afficherLesFontAwesome();
        $scope.afficherListeMenu();
    }]);

//Directive modale
app.directive('ngModalfontawesome', function () {
    return {
        restrict: 'A',
        templateUrl: 'packages/r-config/views/templateModalFontAwesome.html',
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
app.directive('ngModalfontawesomemenu', function () {
    return {
        restrict: 'A',
        templateUrl: 'packages/r-config/views/templateModalFontAwesomeMenu.html',
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