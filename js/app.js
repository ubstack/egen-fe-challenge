var app = angular.module('CCApp', []);

app.controller('CCController', function ($scope, $http) {
    $scope.customCard = "";
    $scope.cards = {};
    $http.get('/js/cc.json').success(function (data) {
        $scope.cards = data.cards;
    });
});