angular.module('nba-game-schedule', [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://localhost.com/3000/**'
    ]);
  })
