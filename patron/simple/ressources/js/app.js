var app = angular.module('raptorApp').controller('Ctrl1', ['$scope', '$http', function($scope, $http){
        $scope.yourName = "Ctrl1";
        
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
        
        $http({
            method: 'POST',
            url: 'packages/default/model/default.php',
            data: $.param(dataObj),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).
            success(function (datas) {
                $scope.error = false;
                $scope.datas = datas;                               
                
            }).
            error(function (datas) {
                $scope.error = true;
                $scope.datas = datas;
            });
        
        /*EVENT*/
        $scope.actionClick = function ()
        {
            alert('Click');
        }
        
}]);

angular.module('raptorApp').controller('titleCtrl', ['$scope', '$http', function($scope, $http){
        $scope.title = "Projet RAPTOR";
}]);
