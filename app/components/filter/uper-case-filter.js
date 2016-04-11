(function(){
    angular.module('myApp.mtUppercase', [])
        .filter('mtUppercase', function(){
            return function(input){
                if(!input) return input;

                return input.toString().toUpperCase();
            }
    });

})();
