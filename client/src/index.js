angular.module('nba-game-schedule', [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.localhost.com/3000/**'
    ]);
  })
