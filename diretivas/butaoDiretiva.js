angular.module('app').directive('btnButao', function() {
    return {
      
        restrict: 'E',
        templateUrl:  'html/butao.html',
       scope:{
           disabiltar:"=",
           btnNome:"=",
           acao :"&",
       }
    };
  });
  /*btnnome e o nome da variavel que vai na div do butao eo botaoNome 
  vai ser usando com atributo na diretiva 
   = vai fazer um two-way dataBinding ou seja vai altera no controle e na div
   & aqui ta fazendo uma execução 
  */