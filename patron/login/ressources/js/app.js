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
angular.module('raptorApp').factory('raConnexion', function ($http) {
    var factory = {
        banner: false,
        getConnexion: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/login/model/login.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        setBanner: function (etat) {
            factory.banner = etat;
        },
        getBanner: function () {
            return factory.banner;
        }
    };
    return factory;
});

angular.module('raptorApp').factory('utilisateurDroit', function ($http) {
    var factory = {
        getAllUser: function (handleData) {
            $http({
                method: 'POST',
                url: 'packages/login/model/utilisateurlistes.php',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        AddUser: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/login/model/utilisateurajouter.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        saveModifUser: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/login/model/utilisateurenregistrer.php',
                data: $.param(dataObj),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
                    success(function (datas) {
                        handleData(datas);
                    });
        },
        deleteUser: function (dataObj, handleData) {
            $http({
                method: 'POST',
                url: 'packages/login/model/utilisateursupprimer.php',
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

angular.module('raptorApp')
        .controller('CtrlUtilisateur', ['$scope', '$rootScope', '$http', 'raConnexion', '$location', '$cookies', '$cookieStore', '$window', '$sce', 'utilisateurDroit', function ($scope, $rootScope, $http, raConnexion, $location, $cookies, $cookieStore, $window, $sce, utilisateurDroit) {
                // Initialisation
                $scope.login = $cookieStore.get('login');
                $scope.password = $cookieStore.get('password');
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

                    $scope.ajouterUser = $cookieStore.get('ajouter') == "t";
                    $scope.consulterUser = $cookieStore.get('consulter') == "t";
                    $scope.editerUser = $cookieStore.get('editer') == "t";
                    $scope.supprimerUser = $cookieStore.get('supprimer') == "t";

                    $scope.superUser = $scope.admindb;
                    $scope.num_matricule = $cookieStore.get('login');
                }

                if ($scope.superUser == false)
                {
                    //$location.path('/deconnexion');
                }
                $scope.varUser = {}
                $scope.varUser.matricule = "";
                $scope.varUser.consulter = false;
                $scope.varUser.ajouter = false;
                $scope.varUser.editer = false;
                $scope.varUser.supprimer = false;
                $scope.varUser.admin = false;

                //List utilisateur                
                utilisateurDroit.getAllUser(function (utilisateurs) {

                    var valstrikeFacture = [];

                    var consulter = [];
                    var ajouter = [];
                    var editer = [];
                    var supprimer = [];
                    var admin = [];

                    for (var item in utilisateurs) {
                        valstrikeFacture.push("");

                        if (utilisateurs[item].consulter == "t") {
                            consulter.push(true);
                        } else {
                            consulter.push(false);
                        }
                        if (utilisateurs[item].ajouter == "t") {
                            ajouter.push(true);
                        } else {
                            ajouter.push(false);
                        }
                        if (utilisateurs[item].editer == "t") {
                            editer.push(true);
                        } else {
                            editer.push(false);
                        }
                        if (utilisateurs[item].supprimer == "t") {
                            supprimer.push(true);
                        } else {
                            supprimer.push(false);
                        }
                        if (utilisateurs[item].administrateur == "t") {
                            admin.push(true);
                        } else {
                            admin.push(false);
                        }
                        //console.log(utilisateurs[item]);
                    }
                    $scope.valstrikeFacture = valstrikeFacture;

                    $scope.consulter = consulter;
                    $scope.ajouter = ajouter;
                    $scope.editer = editer;
                    $scope.supprimer = supprimer;
                    $scope.admin = admin;

                    $scope.listAllUtilisateur = utilisateurs;
                    //console.log(utilisateurs);
                });

                $scope.ajouterUtilisateur = function (data)
                {
                    var matricule = data.matricule;
                    var consulter = data.consulter;
                    var ajouter = data.ajouter;
                    var editer = data.editer;
                    var supprimer = data.supprimer;
                    var admin = data.admin;

                    var dataObj = {
                        matricule: matricule,
                        consulter: consulter,
                        ajouter: ajouter,
                        editer: editer,
                        supprimer: supprimer,
                        admin: admin
                    };
                    utilisateurDroit.AddUser(dataObj, function (validation) {
                        //List utilisateur                
                        //List utilisateur                
                        utilisateurDroit.getAllUser(function (utilisateurs) {

                            var valstrikeFacture = [];

                            var consulter = [];
                            var ajouter = [];
                            var editer = [];
                            var supprimer = [];
                            var admin = [];

                            for (var item in utilisateurs) {
                                valstrikeFacture.push("");

                                if (utilisateurs[item].consulter == "t") {
                                    consulter.push(true);
                                } else {
                                    consulter.push(false);
                                }
                                if (utilisateurs[item].ajouter == "t") {
                                    ajouter.push(true);
                                } else {
                                    ajouter.push(false);
                                }
                                if (utilisateurs[item].editer == "t") {
                                    editer.push(true);
                                } else {
                                    editer.push(false);
                                }
                                if (utilisateurs[item].supprimer == "t") {
                                    supprimer.push(true);
                                } else {
                                    supprimer.push(false);
                                }
                                if (utilisateurs[item].administrateur == "t") {
                                    admin.push(true);
                                } else {
                                    admin.push(false);
                                }
                                //console.log(utilisateurs[item]);
                            }
                            $scope.valstrikeFacture = valstrikeFacture;

                            $scope.consulter = consulter;
                            $scope.ajouter = ajouter;
                            $scope.editer = editer;
                            $scope.supprimer = supprimer;
                            $scope.admin = admin;

                            $scope.listAllUtilisateur = utilisateurs;
                            //console.log(utilisateurs);
                        });
                        $scope.varUser.matricule = "";
                        $scope.varUser.consulter = false;
                        $scope.varUser.ajouter = false;
                        $scope.varUser.editer = false;
                        $scope.varUser.supprimer = false;
                        $scope.varUser.admin = false;
                    });

                };

                $scope.saveModif = function (id, index, consulter, ajouter, editer, supprimer, admin) {
                    var dataObj = {
                        id: id,
                        consulter: consulter,
                        ajouter: ajouter,
                        editer: editer,
                        supprimer: supprimer,
                        admin: admin,
                    };
                    utilisateurDroit.saveModifUser(dataObj, function (validation) {
                        //.log(validation);
                    });
                };
                $scope.supprimerUser = function (id, index) {
                    var dataObj = {
                        id: id
                    };
                    utilisateurDroit.deleteUser(dataObj, function (validation) {
                        //Actualiser liste
                        //List utilisateur                            
                        utilisateurDroit.getAllUser(function (utilisateurs) {

                            var valstrikeFacture = [];

                            var consulter = [];
                            var ajouter = [];
                            var editer = [];
                            var supprimer = [];
                            var admin = [];

                            for (var item in utilisateurs) {
                                valstrikeFacture.push("");

                                if (utilisateurs[item].consulter == "t") {
                                    consulter.push(true);
                                } else {
                                    consulter.push(false);
                                }
                                if (utilisateurs[item].ajouter == "t") {
                                    ajouter.push(true);
                                } else {
                                    ajouter.push(false);
                                }
                                if (utilisateurs[item].editer == "t") {
                                    editer.push(true);
                                } else {
                                    editer.push(false);
                                }
                                if (utilisateurs[item].supprimer == "t") {
                                    supprimer.push(true);
                                } else {
                                    supprimer.push(false);
                                }
                                if (utilisateurs[item].administrateur == "t") {
                                    admin.push(true);
                                } else {
                                    admin.push(false);
                                }
                            }
                            $scope.valstrikeFacture = valstrikeFacture;

                            $scope.consulter = consulter;
                            $scope.ajouter = ajouter;
                            $scope.editer = editer;
                            $scope.supprimer = supprimer;
                            $scope.admin = admin;

                            $scope.listAllUtilisateur = utilisateurs;
                        });
                    });
                };
            }]);

//Controller par defaut
//CONTROLLER
angular.module("raptorApp")
        .controller('CtrlLogin', ['$scope', '$rootScope', '$http', 'raConnexion', '$location', '$cookies', '$cookieStore', '$window', function ($scope, $rootScope, $http, raConnexion, $location, $cookies, $cookieStore, $window) {
                /*TEST USER*/
                //Si enregistrer continuer                        
                //Sinon page login

                $scope.login = {};
                $scope.login.matricule = "";
                $scope.login.password = "";

                if ($cookieStore.get('login') == undefined && $cookieStore.get('password') == undefined)
                {
                    try {
                        $cookieStore.put('login', undefined);
                        $cookieStore.put('password', undefined);
                        $cookieStore.put('nom', undefined);
                        $cookieStore.put('prenoms', undefined);
                        $cookieStore.put('admin', undefined);
                        $cookieStore.put('consulter', undefined);
                        $cookieStore.put('ajouter', undefined);
                        $cookieStore.put('editer', undefined);
                        $cookieStore.put('supprimer', undefined);
                    } catch (e) {
                    }
                    $rootScope.hideYourBannerRoot(false);
                    $location.path('/login');
                } else {
                    if ($location.path() == '/login')
                    {
                        $rootScope.hideYourBannerRoot(true);

                        raConnexion.setBanner(true);

                        $location.path('/');

                    }

                    if ($location.path() == '/deconnexion')
                    {
                        $rootScope.hideYourBannerRoot(true);

                        try {
                            $cookieStore.put('login', undefined);
                            $cookieStore.put('password', undefined);
                            $cookieStore.put('nom', undefined);
                            $cookieStore.put('prenoms', undefined);
                            $cookieStore.put('admin', undefined);
                            $cookieStore.put('consulter', undefined);
                            $cookieStore.put('ajouter', undefined);
                            $cookieStore.put('editer', undefined);
                            $cookieStore.put('supprimer', undefined);
                        } catch (e) {
                        }
                        $http.defaults.headers.post['login'] = undefined;
                        $http.defaults.headers.post['password'] = undefined;
                        $location.path('/login');
                    }
                }
                /*Fin test user*/

                //Initialisation
                $scope.showError = false;
                // TEST BDD
                // USING MODEL WITH PARSE DATA
                $scope.name = "Name";
                $scope.employees = "Employees";
                $scope.headoffice = "Headoffice";
                /*EVENT*/
                //Login
                $scope.actionLogin = function (myLogin, myPassword)
                {
                    $scope.showError = false; //Cacher message d'erreur
                    var dataObj = {
                        login: myLogin,
                        password: myPassword
                    };
                    //Initialisation après validation login
                    raConnexion.getConnexion(dataObj, function (output) {
                        if (output.verification == true) //Si oui ouvrir page de travail
                        {
                            //Coockies
                            $http.defaults.headers.post['login'] = output.matricule;
                            $http.defaults.headers.post['password'] = output.password;

                            /* Cookies */
                            $cookies.userName = 'Sandeep';

                            $cookieStore.put('login', output.matricule);
                            $cookieStore.put('password', output.password);
                            $cookieStore.put('nom', output.nom);
                            $cookieStore.put('prenoms', output.prenoms);
                            $cookieStore.put('admin', output.administrateur);
                            $cookieStore.put('consulter', output.consulter);
                            $cookieStore.put('ajouter', output.ajouter);
                            $cookieStore.put('editer', output.editer);
                            $cookieStore.put('supprimer', output.supprimer);

                            $rootScope.hideYourBannerRoot(true);

							$rootScope.rootInformation = {};
                            $rootScope.rootInformation.nom = output.nom;
                            $rootScope.rootInformation.prenoms = output.prenoms;
                            $rootScope.rootInformation.matricule = output.matricule;
							
                            //Redirection
                            $location.path('/');
                        } else {                        //Sinon afficher message d'erreur
                            $scope.showError = true;
                        }
                    });
                };
            }]);

//CONTROLLER
angular.module("raptorApp")
        .controller('CtrlMenu', ['$scope', '$rootScope', '$http', 'raConnexion', '$location', '$cookies', '$cookieStore', '$window', function ($scope, $rootScope, $http, raConnexion, $location, $cookies, $cookieStore, $window) {

                $rootScope.hideYourBannerRoot = function (bool) {
                    if (bool) {
                        $scope.showBanner = true;
                    } else {
                        $scope.showBanner = false;
                    }
                }

                $rootScope.imAdmin = function (bool) {
                    if (bool) {
                        $scope.showAdministrateur = true;
                    } else {
                        $scope.showAdministrateur = false;
                    }
                }
            }]);