(function($http, $q) {

  var FoosballService = function($http, $q) {
     this.playerRanking = {};
     this.playerRankingSaved = 0;
     this.newGameScores = [];
     this.playerScores = [{  "player1":  "Alex", "score1": 4,  "player2":  "Barrett", "score2": 5 },

                          { "player1":  "Alex", "score1": 1,  "player2":  "Barrett", "score2": 5 },

                          { "player1":  "Alex", "score1": 2,  "player2":  "Barrett", "score2": 5 },

                          { "player1":  "Alex", "score1": 0,  "player2":  "Barrett", "score2": 5 },

                          { "player1":  "Alex", "score1": 6,  "player2":  "Barrett", "score2": 5 },

                          { "player1":  "Alex", "score1": 5,  "player2":  "Barrett", "score2": 2 },

                          { "player1":  "Alex", "score1": 4,  "player2":  "Barrett", "score2": 0 },

                          { "player1":  "Joel", "score1": 4,  "player2":  "Barrett", "score2": 5 },

                          { "player1":  "Tim" , "score1": 4,  "player2":  "Alex", "score2": 5 },

                          { "player1":  "Tim" , "score1": 5,  "player2":  "Alex", "score2": 2 },

                          { "player1":  "Alex", "score1": 3,  "player2":  "Tim", "score2": 5 },

                          { "player1":  "Alex", "score1": 5,  "player2":  "Tim", "score2": 3 },

                          { "player1":  "Alex", "score1": 5,  "player2":  "Joel", "score2": 4 },

                          { "player1":  "Joel", "score1": 5,  "player2":  "Tim", "score2": 2 }];


     this.resetAllVars = function() {
        this.playerRanking = {};
        this.playerScores = [];
        this.playerRankingSaved = 0;
        this.newGameScores = [];
     };

     this.resetNewGameScores = function() {
        this.newGameScores = [];
     };

     this.resetPlayerRanking = function() {
         this.playerRanking = {};
     };

     this.resetPlayerRankingSaved = function() {
           this.playerRankingSaved = 0;
     };


     this.resetPlayerScores = function() {
        this.playerScores;
     };

      
     this.addPlayerScores = function(newScores) {
         this.playerScores.push(newScores);
     };  
 
    
     this.getPlayerRanking = function() {

        var defer = $q.defer();

        defer.resolve(this.playerScores);

        return defer.promise;
    };


  };

  FoosballService.$inject = ['$http', '$q'];

  angular.module('app_foosball').service('FoosballService', FoosballService);

})();
     