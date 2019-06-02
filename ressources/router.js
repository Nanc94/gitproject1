var app = angular.module("raptorApp", ["ngRoute", "ngCookies", "angular-autogrow", "ngToast", "autoCompleteModule", "jkuri.datepicker"]);

app.controller('myCtrl', function ($scope) {
    $scope.yourName = "myCtrl";

});

//Nom du projet
angular.module('raptorApp').controller('titleCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.title = "Projet SEAD";
    }]);

////Function appeler à chaque controlleur
//app.run(function ($scope,$rootScope,$location,$cookieStore) {
//    //TEST CONNEXION ELSE /LOGIN
//    //SPECIAL LOGIN //
//    $scope.login = $cookieStore.get('login');
//    $scope.password = $cookieStore.get('password');
//
//    $rootScope.rootInformation = {};
//    $rootScope.rootInformation.nom = $cookieStore.get('nom');
//    $rootScope.rootInformation.prenoms = $cookieStore.get('prenoms');
//    $rootScope.rootInformation.matricule = $cookieStore.get('login');
//
//    if ($scope.login == undefined && $scope.login == undefined) {
//        $location.path('/login');
//    } else {
//        //For banner
//        $rootScope.hideYourBannerRoot(true);
//
//
//        $scope.admindb = $cookieStore.get('admin') == "t";
//        if ($scope.admindb)
//            $rootScope.imAdmin(true);
//        else
//            $rootScope.imAdmin(false);
//        //end for banner
//    }
//    // FIN SPECIAL LOGIN //
//});

//ROUTER
app.config(function ($routeProvider) {
    $routeProvider
            .when("/login", {
                templateUrl: "packages/login/views/login.html",
                controller: 'CtrlLogin',
            })
            .when("/avance-globale", {
                templateUrl: "packages/avance-etudes/views/avance-globale.html",
                controller: 'CtrlAvanceglobale',
            })
            .when("/avance-encours", {
                templateUrl: "packages/avance-etudes/views/avance-encours.html",
                controller: 'CtrlAvanceencours',
            })
            .when("/indicateur-retard", {
                templateUrl: "packages/indicateur-etudes/views/indicateur-retard.html",
                controller: 'CtrlIndicateurretard',
            })
            .when("/suivi-performance", {
                templateUrl: "packages/indicateur-etudes/views/suivi-performance.html",
                controller: 'CtrlSuiviPerformance',
            })
            .when("/situation-annuel", {
                templateUrl: "packages/indicateur-etudes/views/situation-annuel.html",
                controller: 'CtrlSituationAnnuel',
            })
            .when("/statistique-dossier", {
                templateUrl: "packages/indicateur-etudes/views/statistique-dossier.html",
                controller: 'CtrlStatistiqueDossier',
            })
            .when("/", {
                templateUrl: "packages/projet/views/tableau-bord.html",
                controller: 'CtrlTableauBord',
            })
            .when("/tableau-bord", {
                templateUrl: "packages/projet/views/tableau-bord.html",
                controller: 'CtrlTableauBord',
            })
            .when("/recherche-avance", {
                templateUrl: "packages/projet/views/recherche-avance.html",
                controller: 'Ctrlrecherche',
            })
            .when("/documentation", {
                templateUrl: "packages/projet/views/documentation.html",
                controller: 'Ctrldocumentation',
            })
            .when("/changer-passe", {
                templateUrl: "packages/projet/views/changer-passe.html",
                controller: 'Ctrlchangerpasse',
            })

            .when("/deconnexion", {
                templateUrl: "packages/login/views/login.html",
                controller: 'CtrlLogin',
            })
             // .when("/", {
                 // templateUrl: "packages/default/views/accueil.html",
                 // controller: 'Ctrldefault',
            // })
            // .when("/accueil", {
                // templateUrl: "packages/default/views/accueil.html",
                // controller: 'Ctrldefault',
            // })
            .when("/verif/:id", {
                templateUrl: "packages/default/views/verif.html",
                controller: 'CtrlVerif',
            })
            .when("/tableau", {
                templateUrl: "packages/default/views/tableau.html",
                controller: 'CtrlTableau',
            })
            .when("/default", {
                templateUrl: "packages/default/views/default.html",
                controller: 'myCtrl',
            })
            .otherwise({
                templateUrl: "packages/default/views/error_404.html",
                controller: 'myCtrl',
            });

});

//ROUTER Administration RAPTOR
app.config(function ($routeProvider) {
    $routeProvider
            .when("/r-config", {
                templateUrl: "packages/r-config/views/accueil.php",
                controller: 'CtrlRConfig',
            }).when("/r-generation", {
        templateUrl: "packages/r-generation/views/accueil.html",
        controller: 'CtrlRGeneration',
    }).when("/utilisateur", {
        templateUrl: "packages/login/views/utilisateur.html",
        controller: 'CtrlUtilisateur',
    });

});