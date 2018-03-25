angular.module('nba-game-schedule')
  .component('gameShort', {
    bindings: {
      onClick: '<',
      game: '<'
    },
    controller: function() {
      this.teamImage = (team) => {
        return `./assets/images/${team.Abbreviation}.png`
      };
    },
    templateUrl: `src/templates/gameShort.html`
  });
