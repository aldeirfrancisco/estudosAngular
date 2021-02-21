
angular.module('app').directive('formCadastro', function() {
    return {
        restrict: 'E',
        templateUrl:  'html/form.html',
       
    };
  });
  angular.module('app').directive('formataDinheiro', function() {
    return {
        require: 'ngModel',
        link: function (scope,element,attrs,ctrl){
          
            // var _formataDinheiro = function (dinheiro){
                
            //     dinheiro = dinheiro.replace(/[^0-9]+g/," ")
            //     if(dinheiro.length > 2){
            //         dinheiro = dinheiro.substring(0,2) +","+ dinheiro.substring(2)
            //     }
            //     if(dinheiro.length > 5){
            //         dinheiro = dinheiro.substring(0,1) +"."+ dinheiro.substring(2)
            //         dinheiro = dinheiro.substring(0,5) +","+ dinheiro.substring(6,8)
            //     }
                
            //     return dinheiro
            
            // }
            // element.bind("keyup", function(){
            //   ctrl.$setViewValue(_formataDinheiro(ctrl.$viewValue));
            //   ctrl.$render()
            //     console.log(ctrl.$viewValue)
            // })
           
        }
    };
  });
