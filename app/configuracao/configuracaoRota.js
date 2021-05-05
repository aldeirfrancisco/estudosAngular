
 

angular.module('app')
       .config(function ($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(true);
            $routeProvider
                    .when('/cadastrar',{
                            templateUrl: 'html/form.html',
                            controller: 'appControler',
            });
            $routeProvider
                    .when('/cadastrar/editar/:codigo',{
                            templateUrl: 'html/form.html',
                            controller: 'appControler',
            });
            
            $routeProvider
            .when('/cadastrar/caixa',{
                    templateUrl: 'html/caixa.html',
                    //controller: 'appControler',
             });
             $routeProvider
            .when('/cadastrar/caixa/:mesa',{
                    templateUrl: 'html/caixa.html',
                    //controller: 'appControler',
             });
            
            $routeProvider.otherwise({redirectTo: '/cadastrar/caixa'});
        });
  
