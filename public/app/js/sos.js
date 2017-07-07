(function () {
    var app = angular.module('sos', []);

    var config = {
        'app_info' : {
            'name' : "SoS"
        },
        'urls' : {
            'login' : 'http://localhost:8000/user/login',
            'signup' : 'http://localhost:8000/user/signup',
            'logout' : 'http://localhost:8000/user/logout',
            'profile' : 'http://localhost:8000/user/profile',
            'forgotPassword' : 'http://localhost:8000/user/forgotPassword'
        }
    };

    app.constant('urls', config.urls);
    app.constant('app_info', config.app_info);
})();