angular.module('nba-game-schedule')
  .component('app', {
    controller: function(database) {
      this.updateGames = (games) => {
        this.mainGame = games[0];
        this.games = games;
        this.makeImageUrl(this.mainGame);
      }


      this.makeImageUrl = (game) => {
        const url = `${game.location}`.toLowerCase().replace(/\s/gi, '');
        this.imageUrl = `./assets/images/${url}.jpeg`;
      }

      this.selectMainGame = (game) => {
        this.mainGame = game;
        this.makeImageUrl(this.mainGame);
      }

      database.updateGameList(this.updateGames);
    },
    templateUrl: `src/templates/app.html`
  });
