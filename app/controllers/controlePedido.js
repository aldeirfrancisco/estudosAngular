angular.module('app').controller('controlePedido',['$scope',function($scope,){
$scope.mostrarEndereco =false;
$scope.finalizar="Finalizar";
$scope.enderecoModal = function(){
    $scope.mostrarEndereco =true;
}
 const cadastrarEndereco = function(){
    $scope.mostrarEndereco =false;
}
 const finalizar = function(){
    return  console.log("aqui")
 }

  
$scope.acoesPedido = {
         filalizar:{
             nome:"Finalizar",
             acao:finalizar,
             style:"styleButao",
         },
         endereco:{
             nome:"Endereço",
             acao:cadastrarEndereco,
             style:"styleButao2",
         },
         mesa:{
            nome:"Mesas",
            acao:cadastrarEndereco,
            style:"styleButao3",
        },
}
}]);
