'use strict';
angular.module('myApp.mtagArrayFilter', [])
    .filter('mtagArrayFilter', mtagArrayFilter);

function mtagArrayFilter() {
    return function(array, fnc){
        if(!array) return [];

        var result = [];
        if(angular.isArray(array)){
            angular.forEach(array, function(item){
               if(angular.isFunction(fnc)){
                   if(fnc(item)){
                       result.push(item);
                   }
               }
            });
        }

        return result;
    }
}