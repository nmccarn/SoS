/* global angular */
'use strict';
(function() {
    angular.module('sos').service('sosLoggedInState', [ '$http', 'urls', 
        function($http, urls) {
        return {
            login: function (user, success, error) {
                error();
                return 'User already logged in';
            },
            signup: function (user, success, error) {
                error();
                console.log('loggedInState - signup');
                return 'User already logged in';
            },
            signout: function (user, success, error) {
                $http.post(urls.logout, user)
                     .then(function(response) {
                         success();
                }, function(response) {
                    error();
                });
                console.log('loggedInState - signout');
                return 'Signed user out';
            },
            viewAccount: function (user) {
                console.log('loggedInState - view account');
                return 'Sending user to Account page';
            },
            isSignedIn: function () {
                console.log('loggedInState - isSignedIn');
                return true;
            },
            forgotPassword: function(username) {
                console.log('loggedInState - forgot password');
                return 'User already signed in';
            }
        };
    }]);

    angular.module('sos').service('sosLoggedOutState', [ '$http', 'urls',
        function($http, urls) {
        return {
            login: function (user, success, error) {
                $http.post(urls.login, {username: 'me', password: 'password2'})
                     .then(function(response) {
                         success();
                }, function(response) {
                    error();
                });
                console.log('loggedOutState - login');
                return 'Logging user in';
            },
            signup: function (user, success, error) {
                $http.post(urls.signup, user)
                     .then(function(response) {
                         success();
                }, function(response) {
                    error();
                });
                console.log('loggedOutState - signup');
                return 'Signing user up';
            },
            signout: function (user, success, error) {
                error();
                console.log('loggedOutState - signout');
                return 'User is already signed out';
            },
            viewAccount: function (user) {
                console.log('loggedOutState - view account');
                return 'User is not signed in.';
            },
            isSignedIn: function () {
                console.log('loggedOutState - isSignedIn');
                return false;
            },
            forgotPassword: function(username) {
                $http.post(urls.forgotPassword, username)
                     .then(function(response) {
                        // success
                }, function(response) {
                    // error
                });
                console.log('loggedOutState - forgot password');
                return 'Resetting password';
            }
        };
    }]);

    angular.module('sos').service('sosUserService',
        ['sosLoggedInState', 'sosLoggedOutState',
        function(sosLoggedInState, sosLoggedOutState) {

            var state;
            if (false)
                state = sosLoggedInState;
            else state = sosLoggedOutState;

            return {
                login: function (user) {
                    return state.login(user, function() {
                        state = sosLoggedInState;
                    }, function() {
                        state = sosLoggedOutState;
                    });
                },
                signup: function(user) {
                    return state.signup(user, function() {
                        state = sosLoggedInState;
                    }, function() {
                        state = sosLoggedOutState;
                    });
                },
                signout: function(user) {
                    return state.signout(user, function() {
                        state = sosLoggedOutState;
                    }, function() {
                        state = sosLoggedInState;
                    });
                },
                viewAccount: function(user) {
                    return state.viewAccount(user);
                },
                isSignedIn: function() {
                    return state.isSignedIn();
                },
                forgotPassword: function(username) {
                    return state.forgotPassword(username);
                }
            };
    }]);
})();
