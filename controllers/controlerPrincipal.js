
angular.module('app').controller('appControler',['$scope',function($scope){
//filter var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


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


        console.log($scope.produtos)
 }
 

   $scope.formatReal = function (dinheiro){
       
       dinheiro = dinheiro+'';
       dinheiro = pegandoSoNumero(dinheiro)
        dinheiro = dinheiro.replace(/([0-9]{2})$/g, ",$1")

        if(dinheiro.length >6){
            dinheiro = dinheiro.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }
      
   return dinheiro
}
 const pegandoSoNumero = dinheiro =>dinheiro.split("").filter(n => (Number(n) || n == 0)).join("");
 
     
}]);

