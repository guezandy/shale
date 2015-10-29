'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ArticleAddCtrl
 * @description
 * # ArticleAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('ArticleAddCtrl', function ($scope, Article, $location) {
  $scope.article = {};
  $scope.saveArticle = function() {
    Article.post($scope.article).then(function() {
      $location.path('/article');
    });
  };
});
