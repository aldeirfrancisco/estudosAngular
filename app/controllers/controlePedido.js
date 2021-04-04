angular.module('app').controller('controlePedido',['$scope',function($scope,){
$scope.soNumero = /^\d+$/;
$scope.mostrarEndereco =false;
$scope.finalizar="Finalizar";
$scope.pedidos=[];
const enderecoModal = function(){
    $scope.mostrarEndereco =true;
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
        acao:enderecoModal,
        style:"styleButao2",
    },
    mesa:{
        nome:"Mesas",
        acao:enderecoModal,
        style:"styleButao3",
    },
}
$scope.cadastrarEndereco = function(cliente){
    $scope.mostrarEndereco =false;
    $scope.pedidos.push(cliente)
    console.log(cliente)
}

    
    

 

}]);
