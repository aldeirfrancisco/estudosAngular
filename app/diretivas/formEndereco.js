
angular.module('app').directive('formEndereco', function() {
    return {
      
        restrict: 'EA',
        templateUrl:  'html/formEndereco.html',

        link: function (scope,element){
          scope.soNumero = /^\d+$/;
         
            
        }
    };
  });
  