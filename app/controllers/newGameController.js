(function() {
	 var NewGameController = function($scope, $log, FoosballService) {
        $scope.player1 = '';
        $scope.score1 = '';
        $scope.player2 = '';
        $scope.score2 = '';

        FoosballService.resetNewGameScores();
  

        $scope.submitScores = function() {
             var gameScores = { player1 : $scope.player1,
                                score1 : parseInt($scope.score1),
                                player2 : $scope.player2,
                                score2 : parseInt($scope.score2)
                              };

             // add new score to existing score data
        	 FoosballService.playerScores.push(gameScores);
             
             // add t0 new game score
             FoosballService.newGameScores.push(gameScores);	  
        };

	 };

	 NewGameController.$inject = ['$scope','$log','FoosballService'];

	 angular.module('app_foosball').controller('NewGameController', NewGameController);

})();

