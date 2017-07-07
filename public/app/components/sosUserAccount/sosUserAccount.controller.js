angular.module('sos').controller('sosUserAccountController', 
                ['$scope', 'sosUserService', function($scope, sosUserService) { 

    $scope.loggedIn = sosUserService.isSignedIn();

    $scope.signUp = function() {
        var message = sosUserService.signup($scope.user);
        $scope.loggedIn = sosUserService.isSignedIn();
        console.log(message);
    };

    $scope.logIn = function() {
        console.log($scope.username);
        console.log($scope.password);
        
        var message = tpUserService.login($scope.user);
        console.log(message);
        $scope.loggedIn = sosUserService.isSignedIn();
    };

    $scope.forgotPassword = function() {
        var message = sosUserService.forgotPassword(user);
        console.log(message);
    };

    $scope.logOut = function() {
        var message = sosUserService.signout($scope.user);
        console.log(message);
        $scope.loggedIn = sosUserService.isSignedIn();
        $scope.user = null;
    };
}]);

$(document).ready(function(){
    //Handles menu drop down
    $('.dropdown-menu').find('form').click(function (e) {
        e.stopPropagation();
    });
});