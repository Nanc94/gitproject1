<div class="row">
    <div class="col-sm-12">
        <!-- contenu des configurations Raptor -->
        <h2>Configuration menu</h2>
        <hr/>
        <div class="row">
            <div class="col-sm-12">
                <span class="txt-menu-r-config">Création menu</span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Libellé</th>
                            <th>Niveau</th>
                            <th>Url</th>
                            <th>Variable associé</th>
                            <th>Icon</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" placeholder="" class="form-control" ng-model="createmenu.libelle">
                            </td>
                            <td>
                                <input type="text" placeholder="" class="form-control" ng-model="createmenu.niveau">
                            </td>
                            <td>
                                <input type="text" placeholder="" class="form-control" ng-model="createmenu.url">
                            </td>
                            <td>
                                <input type="text" placeholder="" class="form-control" ng-model="createmenu.variable_associe">
                            </td>
                            <td>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="HTML code" aria-label="HTML code" ng-model="createmenu.icon">
                                    <span class="input-group-addon" ng-bind-html="createmenu.icon"></span>
                                </div>
                            </td>

                            <td>
                                <button class="btn btn-secondary" ng-click="voirIconFontAwesome()">
                                    Choisir icon                  
                                </button> 
                            </td>
                            <td>
                                <button class="btn btn-success" ng-click="ajouterMenu(createmenu)">
                                    <i class="fa fa-plus" aria-hidden="true"></i>                 
                                </button> 
                            </td>
                        </tr>
                    </tbody>
                </table>  
                <hr/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <span class="txt-menu-r-config">Liste menu</span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Libellé</th>
                            <th>Niveau</th>
                            <th>Url</th>
                            <th>Variable associé</th>
                            <th>Icon</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr ng-repeat="menu in listeDesMenus">
                            <td>
                                <input type="text" placeholder="" class="form-control" ng-model="menu.libelle">
                            </td>
                            <td>
                                <input type="text" placeholder="" class="form-control" ng-model="menu.niveau">
                            </td>
                            <td>
                                <input type="text" placeholder="" class="form-control" ng-model="menu.url">
                            </td>
                            <td>
                                <input type="text" placeholder="" class="form-control" ng-model="menu.variable_associer">
                            </td>
                            <td>
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="HTML code" aria-label="HTML code" ng-model="menu.icon">
                                    <span class="input-group-addon" ng-bind-html="menu.icon"></span>
                                </div>
                            </td>

                            <td>
                                <button class="btn btn-secondary" ng-click="voirIconFontAwesomeMenu(menu)">
                                    Choisir icon                  
                                </button> 
                            </td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn btn-secondary" ng-click="hautMenu(menu)">
                                        <i class="fa fa-arrow-up" aria-hidden="true"></i>                 
                                    </button> 
                                    <button class="btn btn-secondary" ng-click="basMenu(menu)">
                                        <i class="fa fa-arrow-down" aria-hidden="true"></i>                 
                                    </button> 
                                </div>
                            </td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn btn-secondary" ng-click="gaucheMenu(menu)">
                                        <i class="fa fa-arrow-left" aria-hidden="true"></i>                 
                                    </button> 
                                    <button class="btn btn-secondary" ng-click="droiteMenu(menu)">
                                        <i class="fa fa-arrow-right" aria-hidden="true"></i>                 
                                    </button> 
                                </div>
                            </td>
                            <td>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <button class="btn btn-warning" ng-click="enregistrerMenu(menu)">
                                            <i class="fa fa-save" aria-hidden="true"></i>                 
                                        </button> 
                                    </div>
                                    <div class="col-sm-6">
                                        <button class="btn btn-danger" ng-click="supprimerMenu(menu)">
                                            <i class="fa fa-trash-o" aria-hidden="true"></i>                
                                        </button>
                                    </div>
                                </div>
                            </td>

                        </tr>
                    </tbody>
                </table>  
                <hr/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <span class="txt-menu-r-config">Notes [url]</span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <p>Les Urls qui se trouvent dans les champs "Url" doient aussi être présent dans <span class="success txt-bold">C:\wamp64\www\raptor\ressources\router.js </span></p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <span class="txt-menu-r-config">Notes [variable associé]</span>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <p>Pour ajouter des variables associé, il faut ajouter des methodes utilisant $rootScope dans <span class="success txt-bold">CtrlMenu</span> avec la variable associé que vous avez saisi dans le champ "Variable associé".</p>
                <p>C:\wamp64\www\raptor\packages\login\ressources\js\app.js</p>
                <pre>                        
                    <code class="javascript hljs">
                        $rootScope.imAdmin = function (bool) {
                            if (bool) {
                                $scope.showAdministrateur = true;
                            } else {
                                $scope.showAdministrateur = false;
                            }
                        }
                    </code>           
                </pre>

                <p>En suite, vous pouvez l'appeler dans vos controlleurs au début comme initialisation.</p>
                <pre>                        
                    <code class="javascript hljs">
                        //For banner
                        $scope.admindb = $cookieStore.get('admin') == "t";
                        if ($scope.admindb) {
                            $rootScope.imAdmin(true);
                        } else {
                            $rootScope.imAdmin(false);
                            $('.menu-admin').remove();
                        }
                        //end for banner
                    </code>           
                </pre>
            </div>
        </div>

    </div>
</div>
<div ng-modalfontawesome=""></div>
<div ng-modalfontawesomemenu=""></div>
<toast></toast>