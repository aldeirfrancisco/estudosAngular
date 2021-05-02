
(function(){

  angular.module('app').service('CadastroFactory',[ '$http','$rootScope',function($http,$rootScope) {
 const aqui = {
  "codigo": 5,
  "nome": "Guarana",
  "categoria": "BEBIDA",
  "tamanho": "1l",
  "preco": 10.95

}
$http.get("https://frentecaixa.herokuapp.com/produtos").then(function(response) {
 console.log(response.data);
}, function(err) {
  console.log(err);
});
$http.post("http://localhost:8080/produtos",aqui).then(function(response) {
 console.log(response.data);
}, function(err) {
  console.log(err);
});

 
      }]);
      
    })();
