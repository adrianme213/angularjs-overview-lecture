angular.module('nba-game-schedule')
  .component('gamesList', {
    bindings: {
      onClick: '<',
      games: '<'
    },
    controller: function() {
    },
    templateUrl: `src/templates/gamesList.html`
  });
