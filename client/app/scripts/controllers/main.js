'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope) {
	  $scope.articles = Article.getList().$object;
  });


/**
[
	    {
	      _id: 1,	
	      title: 'A New Hope',
	      description: 'SOMETHING SOMETHING',
	      longtext: 'Algo mas',
	      author: 'Andrew Rodriguez',
	      image: 'http://youtube.com/embed/1g3_CFmnU7k'
	    },
	    {
	      title: 'The Empire Strikes Back',
	      description: 'SOMETHING SOMETHING',
	      longtext: 'Algo mas',
	      author: 'Andrew Rodriguez',
	      image: 'http://youtube.com/embed/1g3_CFmnU7k'
	    },
	    {
	      title: 'Return of the Jedi',
	      description: 'SOMETHING SOMETHING',
	      longtext: 'Algo mas',
	      author: 'Andrew Rodriguez',
	      image: 'http://youtube.com/embed/1g3_CFmnU7k'
	    }
	  ];
**/