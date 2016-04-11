'use strict';
angular.module('myApp.mtagMouseDown', [])
    .directive('mtagMouseDown', mtagMouseDown);

function mtagMouseDown() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs){

            var outerfunc = scope.$eval(attrs.mtagMouseDown);

            element.bind('mousedown', function(evt){
               console.log("MOUSE DOWN");
                if(outerfunc){
                    scope.$apply(function () {
                       if(outerfunc){
                           outerfunc.call(scope.evt.which);
                       }
                    });
                }
            });
        }
    }
}