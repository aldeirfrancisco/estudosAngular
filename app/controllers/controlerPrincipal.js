(function(){ 

  angular.module('app').controller('appControler',['$scope','CadastroServico','$routeParams','$location',
  function($scope,CadastroServico,$routeParams,$location,){
    let vm = this;
            vm.produtos=[];
            vm.soNumero = /^\d+$/;
            $scope.mostrarImput=false;
            $scope.mostrarButao = true;
            $scope.categoria ="Tipos";
            $scope.butaoNome="salvar";
            $scope.nomeAcao="salvar";

            const listaProduto = ()=>{
                      CadastroServico.listaProduto().then((response)=>{
                        getProduto(response.data);
                  },function (error){
                    console.log(error);
                  });

                }
 

            
              $scope.nomeButao=["Pesquisar"];
             const editarProduto = (produtos) => {
                  if($routeParams.codigo){
                   let  cod = $routeParams.codigo;
                   for (let i = 0; i < produtos.length; i++) {
                     if( cod == produtos[i].codigo){
                       vm.produto =  produtos[i];
                        }
                     }
                         $scope.butaoNome="atualizar";
                         $scope.nomeAcao="atualizar";
                         $scope.mostrarImput ==false ? $scope.mostrarButao = false :$scope.mostrarButao = true 
                  }
                }
              $scope.selectProdutos=[
                {categoria:"Bebidas", numero:1},
                {categoria:"Pizzas", numero:2},
                {categoria:"Lanche", numero:3}
              ]



              const salvar = function(produto,cat){
                  produto.categoria =cat.categoria.categoria
                  $scope.categoria ="Tipos";
                  $scope.formProduto.$setPristine()
                  console.log(produto)
                CadastroServico.cadastrarProduto(produto).then((response)=>{
               

                },function(error){
                  console.log(error);
                });
                
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
              const getProduto = (produto)=>{
                  let prod={};
                for (let i = 0; i < produto.length; i++) {
                      prod.codigo = produto[i].codigo ;
                      prod.nome = produto[i].nome;

                      let tam = produto[i].tamanho;
                      prod.tamanho = tam[0].tamanho;

                      prod.preco = formatReal(tam[0].preco.preco);
                      vm.produtos.push(angular.copy(prod))
                      editarProduto(vm.produtos)
                 
                    }
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
                

              const formatReal = function (dinheiro){
                      dinheiro = dinheiro+'';
                      dinheiro
                      
                      dinheiro = CadastroServico.pegandoSoNumero(dinheiro)
                      dinheiro = CadastroServico.formatarRealServe (dinheiro)
                      return dinheiro
              }
              $scope.deletarProduto= function(produto){
              for(lett in $scope.produtos){
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