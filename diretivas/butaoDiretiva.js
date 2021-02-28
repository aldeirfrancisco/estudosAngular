angular.module('app').directive('btnButao', function() {
    return {
      
        restrict: 'E',
        templateUrl:  'html/butao.html',
       scope:{
           disabiltar:"=disabiltar",
           btnNome:"=botaoNome",
           acao :"&acao",
       }
    };
  });
  /*btnnome e o nome da variavel que vai na div do butao eo botaoNome vai ser usando com atributo na diretiva */