
angular.module('app').controller('appControler',['$scope',function($scope){
//filter var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
 
$scope.produtos=[
     {codigo:3, nome:'café',preco:5.00,categoria:"bebidas"},
     {codigo:4, nome:'Suco',preco:8.00,categoria:"bebidas"}
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
        console.log($scope.produtos)
 }
 
}]);

