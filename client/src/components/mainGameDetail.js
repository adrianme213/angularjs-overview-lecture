angular.module('nba-game-schedule')
  .component('mainGameDetail', {
    bindings: {
      mainGame: '<',
      imageUrl: '<'
    },
    controller: function() {
    },
    templateUrl: `src/templates/mainGameDetail.html`
  });
