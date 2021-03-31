(function (){

    angular.module('app').service('cadastroServico',['$http', function($http) {
    
        this.pegandoSoNumero = dinheiro =>dinheiro.split("").filter(n => (Number(n) || n == 0)).join("");
        
        this.formatarRealServe = function(dinheiro){
            dinheiro = dinheiro.replace(/([0-9]{2})$/g, ",$1");
            if(dinheiro.length >6){
                dinheiro = dinheiro.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
            }
           return dinheiro;   

        }
       
        this.bucarProduto =function(){
             
            const data={};
            $http.get(`/produtos`).then(function(response){
              
             data = response.data;
            },function(err){
                     console.log(err)
                });
                return data;
         }
       
      
        



    }]);
    
        
})()