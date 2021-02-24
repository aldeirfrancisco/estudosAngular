
angular.module('app').controller('appControler',['$scope','cadastroServico',function($scope,cadastroServico){
//filter var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
$scope.soNumero = /^\d+$/;


$scope.produtos=[
     {codigo:3, nome:'café',preco:500,categoria:"bebidas"},
     {codigo:4, nome:'Suco',preco:800,categoria:"bebidas"}
    ];
  


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
 
 
     
}]);

