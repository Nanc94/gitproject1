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
angular.module('raptorApp').factory('myGeneration', function ($http) {
    var factory = {
        banner: false,
        creer: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-generation/model/generationtemplate.php',
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
angular.module('raptorApp').factory('mySousProjet', function ($http) {
    var factory = {
        banner: false,
        list: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/r-generation/model/listsousprojet.php',
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
angular.module('raptorApp').controller('CtrlRGeneration', ['$scope', '$rootScope', '$http', 'myPostgres', '$location', '$sce', '$cookies', '$cookieStore', '$window', '$timeout', 'ngToast', 'mySousProjet', 'myGeneration', function ($scope, $rootScope, $http, myPostgres, $location, $sce, $cookies, $cookieStore, $window, $timeout, ngToast, mySousProjet, myGeneration) {

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

        //Déclaration
        $scope.generation = {}
        $scope.generation.sousProjet = "";
        $scope.generation.nomFichier = "";
        $scope.generation.dataHTML = "";



        // FIN SPECIAL LOGIN //
        $scope.listSousProjet = function ()
        {
            var dataObj = {};

            mySousProjet.list(dataObj, function (datas) {
                console.log(datas.dossier);
                $scope.sousprojet = "";
                $scope.dossiers = datas.dossier
            });
        }
        $scope.enregistrerGeneration = function (generation)
        {
            generation.dataHTML = $("#contenu-generation").html();
            var dataObj = generation;
            myGeneration.creer(dataObj, function (datas) {
                console.log(datas);
                ngToast.create({
                    className: datas.notification,
                    content: datas.message
                });
            });
        }
        //Initisation
        $scope.listSousProjet();

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