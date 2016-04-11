(function(){
    angular.module('myApp.mtController', [])
        .controller('mtController', mtController);


    function mtController($scope){
        $scope.example = "1";
        $scope.newArray = ["Markus", "Dieter", "Lars"];
        $scope.users = [
            {"firstname": "Markus", "lastname": "Merten"},
            {"firstname": "Dieter", "lastname": "Rudolf"}
        ];

        $scope.accept = function(item){
            if(!item){
                return false;
            }

            var regex = new RegExp('[0-9]', 'g');
            return regex.test(item);
        }

    }
})();
