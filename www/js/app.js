var app = angular.module('MyHealthApp', ['ionic', 'LocalStorageModule']);
app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('MyHealthApp');
  });