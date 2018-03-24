angular.module('nba-game-schedule')
  .service('database', function($http) {
    this.updateGameList = function(callback) {
      $http.get('http://localhost:3000/gameentry', {})
        .then(function({data}) {
          console.log(data);
          if (callback) {
            callback(data);
          }
        })
        .catch(function({data}) { console.log(data); });
    }
  });
