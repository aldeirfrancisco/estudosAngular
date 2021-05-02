angular.module('app').controller('controlePedido',['$scope','$modal','$routeParams','CadastroFactory',function($scope,$modal,$routeParams,CadastroFactory){
    $scope.soNumero = /^\d+$/;
    $scope.mostrarEndereco =false;
    $scope.campo=false;
    $scope.finalizar="Finalizar";
    $scope.pedidos=[];
    $scope.produto={}
    $scope.produtos =[];
  
    if($routeParams.mesa){
       let mesa = $routeParams.mesa;
       $scope.produto.mesa = mesa;
       };
const endereco= function(){
    $scope.mostrarEndereco =true;
    
};
const finalizar = function(){
    return  console.log("aqui");
};

const mesaModal =function(){
    $scope.mostrarEndereco =false;
      $modal.open({
         templateUrl: 'html/modal.html',
         controller: 'modalControler as controlerModal',
         backdrop:'static',
         size:'lg',
       
        });
};
$scope.acoesPedido = {
    filalizar:{
        nome:"Finalizar",
        acao:finalizar,
        style:"styleButao",
    },
    endereco:{
        nome:"Endereço",
        acao:endereco,
        style:"styleButao2",
    },
    mesa:{
        nome:"Mesas",
        acao: mesaModal,
        style:"styleButao3",
    },
};

$scope.abrir =function(){
    cadastroServico.abrir;
};
$scope.cadastrarEndereco = function(cliente){
    $scope.mostrarEndereco =false;
    $scope.pedidos.push(cliente);
};
 

        $(document).keypress(function(e) {
            let produto={};
            if(e.which == 13){
                
                 let nome = document.getElementById("idnome").value;
                 let codigo = document.getElementById("idcodigo").value;
                 let quantidade = document.getElementById("idquantidade").value;
                 let mesa = document.getElementById("idmesa").value;
                 let obs = document.getElementById("idobs").value;
                 if(nome.length >0 && codigo.length > 0 && quantidade.length > 0 && mesa.length >0&&  obs.length >0){
                     document.getElementById("idnome").value="";
                     document.getElementById("idcodigo").value="";
                     document.getElementById("idquantidade").value="";
                     document.getElementById("idobs").value="";
                     document.getElementById("idmesa").value="";
                     produto.nome = nome;
                     produto.codigo = codigo;
                     produto.quantidade = quantidade;
                     produto.mesa = mesa;
                     produto.observacao = obs;
                     $scope.pedidos.push(produto)
                     console.log(produto)
                 }
                 


               
            }
        });

         const init = ()=>{
    
            $scope.pedidos;
         };
  
         
 init();

}]);
