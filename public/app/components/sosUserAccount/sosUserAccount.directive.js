angular.module('sos').directive('sosUserAccount', function() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/sosUserAccount/sosUserAccount.html',
        scope: { },
        controller: 'sosUserAccountController'
    };
});
