'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl',
      })
      .when('/create/article', {
        templateUrl: 'views/article-add.html',
        controller: 'ArticleAddCtrl',
      })
      .when('/article/:id', {
        templateUrl: 'views/article-view.html',
        controller: 'ArticleViewCtrl',
      })
      .when('/article/:id/delete', {
        templateUrl: 'views/article-delete.html',
        controller: 'ArticleDeleteCtrl',
      })
      .when('/article/:id/edit', {
        templateUrl: 'views/article-edit.html',
        controller: 'ArticleEditCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
