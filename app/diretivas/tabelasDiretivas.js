angular.module('app').directive('tabelasProdutos',['CadastroServico', function(CadastroServico) {
    return {

        restrict: 'E',
        templateUrl:  'html/tabela.html',
        scope:{
         obj:'=',
         acao:'='
        },
       link:(scope,element)=>{
           
     scope.deletarProduto= function(id){
        CadastroServico.deletar(id).then(function (response){
            console.log(response.data)
          },function (error){
  
         console.log(error);
        });
      }
       }
    };
  }]);