 


(function() {
	 var RankController = function($scope, $log, FoosballService) {
	 	  
         $scope.rankingPlayers = [];

         var playersP = FoosballService.getPlayerRanking();
   
         if (FoosballService.playerRankingSaved == 0) {

           playersP.then(function(data) {
           	 // reset these to clear out save cache
           	 FoosballService.playerRankingSaved = 1;
           	 FoosballService.resetPlayerRanking();

             sumScore(data);
           }, function(e) {
         	  
           });
        } else {
           // cached copy
           sumScore(FoosballService.newGameScores);
        }


        // first initial save for playerRanking data
        function sumScore(data) {
            var cnt = data.length;
           
            var playerOneData = [];
            var playerTwoData = [];
            

            for (var x = 0; x < cnt; x++) {
            	var player1 = data[x].player1;
                var player2 = data[x].player2;

                var score1 = parseInt(data[x].score1);
                var score2 = parseInt(data[x].score2);

                // separate into clearer data structure
                playerOneData.push( { name : player1,
                                      score : score1});

                playerTwoData.push( { name : player2,
                                      score : score2});

             }

         
            totalCount(playerOneData, playerOneData.length);
            totalCount(playerTwoData, playerTwoData.length);
 
            setSumScoreArray(FoosballService.playerRanking);
             
        }

        function totalCount(playerData, cnt) {

        	for (var x = 0; x < cnt; x++) {
               var n = playerData[x].name;
               var s = playerData[x].score; 
               if (!FoosballService.playerRanking[n]) {
               	   FoosballService.playerRanking[n] = s;
               } else {
                   FoosballService.playerRanking[n] += s;
               }
            }
        }


        // assign ranking players to array
        function setSumScoreArray(data) {
            for (var x in data) {
              $scope.rankingPlayers.push({ name : x, score : parseInt(data[x]) });
            }

              
        }

    };


  RankController.$inject = ['$scope', '$log', 'FoosballService'];


  angular.module('app_foosball')
      .controller('RankController', RankController);
	
})();


 