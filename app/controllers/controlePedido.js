angular.module('app').controller('controlePedido',['$scope',function($scope,){
$scope.mostrarEndereco =false;
$scope.finalizar="Finalizar";

$scope.enderecoModal = function(){
    $scope.mostrarEndereco =true;
}
$scope.cadastrarEndereco = function(){
    $scope.mostrarEndereco =false;
}

}]);
