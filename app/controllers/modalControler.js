
    (function (){

    angular.module('app').controller('modalControler',['$scope','pedidoServico','$modalInstance','$location',function($scope,pedidoServico,$modalInstance,$location,$routeParams) {
    $scope.mesa;
    function generateRange(n){
      return Array.from({length: n}, (_, i) => i + 1);
   }
   $scope.numero = generateRange(65);
  
     
      $scope.cancelar = function(){
        $modalInstance.dismiss('cancel')
       
        };
        $scope.fechar = function(){
          $modalInstance.dismiss('cancel')
        }
        
        $scope.getMesa = function(){
      $modalInstance.dismiss('cancel')
     $location.path('/cadastrar/caixa/:mesa')
    }
  
    }]);
  
})()