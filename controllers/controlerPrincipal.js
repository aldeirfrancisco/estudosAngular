
angular.module('app').controller('appControler',['$scope','cadastroServico',function($scope,cadastroServico){
//filter var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
$scope.soNumero = /^\d+$/;
$scope.mostrarImput=false;
$scope.mostrarButao = true;

$scope.produtos=[
     {codigo:2, nome:'café',preco:500,categoria:"bebidas"},
     {codigo:3, nome:'leite',preco:550,categoria:"bebidas"},
     {codigo:4, nome:'misto',preco:350,categoria:"bebidas"},
     {codigo:5, nome:'Suco',preco:800,categoria:"bebidas"}
    ];
  $scope.nomeButao=["Cadastrar","Atualizar"]


$scope.selectProdutos=[
    {nome:"Bebidas", numero:1},
    {nome:"Pizzas", numero:2},
    {nome:"Lanche", numero:3}
]

$scope.salvar = function(produto){
        $scope.produtos.push(angular.copy(produto));
        //$scope.produto ={codigo:'',nome:'',preco:''} ou
        delete $scope.produto;
        $scope.formProduto.$setPristine()
 }
 

$scope.formatReal = function (dinheiro){
        dinheiro = dinheiro+'';
        dinheiro = cadastroServico.pegandoSoNumero(dinheiro)
        dinheiro = cadastroServico.formatarRealServe (dinheiro)
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
$scope.buscar=function(){
    $scope.mostrarImput= true;
    $scope.mostrarImput ==true ? $scope.mostrarButao = false :$scope.mostrarButao = true 

}
$scope.pega = function (aqui){

    const buscarPor = cadastroServico.pegandoSoNumero(aqui);
    console.log(buscarPor)
       console.log(typeof parseInt(buscarPor))
         
}
}]);

