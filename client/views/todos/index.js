/* global Firebase:true */

'use strict';

angular.module('angular-prototype')
.controller('TodosCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
  var todos = new Firebase('https://angular-fb-todo.firebaseio.com/todos');
  $scope.todos = $firebaseArray(todos);

  $scope.update = function(todo){
    $scope.todos.$save(todo);
  };

  $scope.add = function(){
    $scope.todos.$add({
      title: $scope.todo.title,
      due: $scope.todo.due.toString(),
      priority: $scope.todo.priority,
      isComplete: false
    });

    $scope.todo =  null;
  };
}]);
