(function() {
	 var UpdateController = function($scope, $log, FoosballService) {
        
      $scope.playerScores = FoosballService.playerScores;

      $scope.updateScores = function(obj) {
         obj.score1 = parseInt(obj.score1); 
         obj.score2 = parseInt(obj.score2);

         if (FoosballService.playerRankingSaved != 0) {
           FoosballService.resetPlayerRankingSaved(); 
         }
      }

	 };

	 UpdateController.$inject = ['$scope','$log','FoosballService'];

	 angular.module('app_foosball').controller('UpdateController', UpdateController);

})();

