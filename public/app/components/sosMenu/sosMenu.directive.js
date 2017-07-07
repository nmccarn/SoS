(function () {
    angular.module('sos').directive('sosMenu', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/components/sosMenu/sosMenu.html',
            controller: 'sosMenuController'
        }
    })
})();