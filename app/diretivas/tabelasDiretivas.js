angular.module('app').directive('tabelasProdutos', function() {
    return {

        restrict: 'E',
        templateUrl:  'html/tabela.html',
        
        link: function (scope,element){
           
            // $(function(){
            //     $("#CampoPreco").maskMoney({symbol:'false', 
            //     showSymbol:true, thousands:'.', decimal:',', symbolStay: true});
             
            // })
        }
    };
  });