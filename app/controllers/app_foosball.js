 

(function() {
   var app_foosball = angular.module('app_foosball',['ngRoute']);

     app_foosball.config(function($routeProvider) {
      $routeProvider
          .when('/rank',
             {
               controller : 'RankController',
               templateUrl : '/tagged/view/rank.html'
              })
           .when('/new_game',
              {
               controller: 'NewGameController',
               templateUrl : '/tagged/view/new_game.html'
              })
            .when('/update',
              {
               controller: 'UpdateController',
               templateUrl : '/tagged/view/update.html'
              })
          .otherwise( { redirectTo : '/rank' });
      });

  
})();


 