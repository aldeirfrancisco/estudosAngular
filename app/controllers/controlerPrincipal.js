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
                        formatProdutos(response.data);
                  },function (error){
                    console.log(error);
                  });

                }
 

            
              $scope.nomeButao=["Pesquisar"];
             const editarProduto = (produtos) => {
               let  cod = $routeParams.codigo;
               if(cod){
                  getProdutoCod(cod)
                  $scope.nomeAcao="atualizar";
                  $scope.butaoNome="atualizar";
                   $scope.mostrarImput ==false ? $scope.mostrarButao = false :$scope.mostrarButao = true 
                 }
               
                   }
                
              $scope.selectProdutos=[
                {categoria:"Bebidas", numero:1},
                {categoria:"Pizzas", numero:2},
                {categoria:"Lanche", numero:3}
              ]
             const getProdutoCod = (codigo)=>{
                  CadastroServico.getProduto(codigo).then((response)=>{
                     
                   return formatProduto(response.data);
                  },function (error){
                  console.error();
                  }); 
             };


              const salvar = function(produto,cat){
                  produto.categoria =cat;
                  produto.preco = produto.preco.replace(/,/,'.');
                  $scope.formProduto.$setPristine()
                  console.log(produto)
                  $scope.formProduto="";
                CadastroServico.cadastrarProduto(produto).then((response)=>{
                  listaProduto();
                  
                },function(error){
                  console.log(error);
                });
                
              }
              const atualizar= function(produto,cat){
               
                $location.path('/cadastrar');
                 console.log(produto)
                CadastroServico.upProduto(produto).then(function(response){
                  $scope.formProduto.$setPristine()
                  $scope.mostrarImput=false;
                  $scope.mostrarButao = true;
                    $scope.nomeAcao="salvar";
                    $scope.butaoNome="salvar";
                  listaProduto();
                },function(error){

                });
              
              }
              //lista produto na tabela
              const formatProdutos = (produto)=>{
                  let prod={};
                
                for (let i = 0; i < produto.length; i++) {
                      prod.id = produto[i].id;
                      prod.codigo = produto[i].codigo ;
                      prod.nome = produto[i].nome;
                      let tam = produto[i].tamanho;
                      prod.tamanho = tam[0].tamanho;
                      
                      prod.preco = formatReal(tam[0].preco.preco);
                      vm.produtos.push(angular.copy(prod))
                      editarProduto(vm.produtos)
                 
                    }
              }
              //buscar produto para edição
              const formatProduto = (produto)=>{
                let prod={};
              for (let i = 0; i < produto.length; i++) {
                    prod.id = produto[i].id;
                    prod.codigo = produto[i].codigo ;
                    prod.nome = produto[i].nome;
                    let tam = produto[i].tamanho;
                    prod.tamanho = tam[0].tamanho;
                    prod.categoria = produto[i].categoria[0].nome
                    prod.preco = formatReal(tam[0].preco.preco);
                    $scope.produto= prod ;
                    
               
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
              $scope.deletarProduto= function(id){
                listaProduto();
                CadastroServico.deletar(id).then(function (response){
                  console.log(response.data)
              },function (error){

               console.log(error);
              });
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