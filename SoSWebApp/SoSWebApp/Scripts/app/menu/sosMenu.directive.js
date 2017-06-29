(function () {
    angular.module('sos').directive('sosMenu', function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'Scripts/app/menu/sosMenu.html',
            controller: 'sosMenuController'
        }
    })
})();