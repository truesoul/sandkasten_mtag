'use strict';
angular.module('myApp.mtagColorPicker', [])
    .directive('mtagColorPicker', mtagColorPicker);

function mtagColorPicker() {
    return {
        restrict: 'E',

        templateUrl: './components/color-picker.html',
        controller: function($scope){
            $scope.r = $scope.r || Math.random()*255;
            $scope.g = $scope.g || Math.random()*255;
            $scope.b = $scope.b || Math.random()*255;
        }
    }
}