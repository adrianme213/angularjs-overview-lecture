angular.module('nba-game-schedule')
  .component('app', {
    controller: function(database) {
      this.updateGames = (games) => {
        this.games = games;
        this.mainGame = this.games[0];
        console.log('this is ', this.games)
      }
      database.updateGameList(this.updateGames);
    },
    templateUrl: `src/templates/app.html`
  });
