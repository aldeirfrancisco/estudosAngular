
 

angular.module('app')
       .config(function ($routeProvider,$locationProvider) {
        $locationProvider.html5Mode(false);
            $routeProvider
                    .when('/cadastrar',{
                            templateUrl: 'html/form.html',
                            controller: 'appControler',
                });
            $routeProvider
                    .when('/cadastrar/editar/:id',{
                            templateUrl: 'html/form.html',
                            controller: 'appControler',
            });
            $routeProvider
            .when('/cadastrar/caixa',{
                    templateUrl: 'html/caixa.html',
                    //controller: 'appControler',
    });
            $routeProvider.otherwise({redirectTo: '/cadastrar/caixa'});
        });
  
