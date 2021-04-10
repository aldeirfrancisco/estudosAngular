
    
    angular.module('app').controller('modalControler',['$scope', '$modalInstance','$log',function($scope,$modalInstance) {

     $scope.nome ="Aldeir"

      $scope.animationsEnabled = true;

      $scope.cancelar = function(){
        $modalInstance.dismiss('cancel')
        };

    }]);
  
