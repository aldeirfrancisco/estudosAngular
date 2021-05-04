(function(){ 

  angular.module('app').controller('appControler',['$scope','CadastroServico','$routeParams','CadastroFactory','$location',
  function($scope,CadastroServico,$routeParams,CadastroFactory,$location,){
    let vm = this;

vm.soNumero = /^\d+$/;
$scope.mostrarImput=false;
$scope.mostrarButao = true;
$scope.categoria ="Tipos";
$scope.butaoNome="salvar";
$scope.nomeAcao="salvar";

 const listaProduto = ()=>{
          CadastroServico.listaProduto().then((response)=>{
            vm.produtos =response.data;
      },function (error){
         console.log(error)
      });

    }
 

 $scope.nomeButao=["Pesquisar"];
 if($routeParams.id){
  let id =$routeParams.id -1; 
  $scope.categoria = listProdutos[id].categoria
    $scope.produto = listProdutos[id]
    $scope.butaoNome="atualizar";
    $scope.nomeAcao="atualizar";
    $scope.mostrarImput ==false ? $scope.mostrarButao = false :$scope.mostrarButao = true 
}



$scope.selectProdutos=[
  {categoria:"Bebidas", numero:1},
  {categoria:"Pizzas", numero:2},
  {categoria:"Lanche", numero:3}
]



const salvar = function(produto){

  CadastroFactory.salvarStorageDados(produto);
  //$scope.produtos.push(angular.copy(produto));
  //$scope.produto ={codigo:'',nome:'',preco:''} ou
  delete $scope.produto;
  $scope.categoria ="Tipos";
  $scope.formProduto.$setPristine()
}
const atualizar= function(produto){
  $scope.deletarProduto(produto);
   salvar(produto)

  $scope.mostrarImput=false;
  $scope.categoria ="Tipos";
  $scope.mostrarButao = true;
  $scope.nomeAcao="salvar";
  $scope.butaoNome="salvar";
  $location.path('/cadastrar');
 
}



$scope.acoes ={
         atualizar:{
              nome:"Atualizar", 
              acao: atualizar,
              style:"btn-primary",
              },
        salvar:{
              nome:"Cadastrar",
              acao:salvar,
              style:"btn-primary"
             },
        pesquisar:{
                  nome:"Pesquisar",
                  acao:salvar,
                  style:"btn-primary"    
            }
                }
  

$scope.formatReal = function (dinheiro){
        dinheiro = dinheiro+'';
        dinheiro
        
        dinheiro = CadastroServico.pegandoSoNumero(dinheiro)
        dinheiro = CadastroServico.formatarRealServe (dinheiro)
        return dinheiro
}
$scope.deletarProduto= function(produto){
 for(let index in $scope.produtos){
     let aux = $scope.produtos[index];
     if(produto === aux){
        $scope.produtos.splice(index,1);
     }
 }
}
$scope.pesquisar=function(){
    $scope.mostrarImput= true;
    $scope.mostrarImput ==true ? $scope.mostrarButao = false :$scope.mostrarButao = true 
    $scope.butaoNome="atualizar";
}
 const init =()=>{
  listaProduto()
 }
 init();
 
}]);

})();