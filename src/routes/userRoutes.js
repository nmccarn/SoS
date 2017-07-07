var express = require('express');
var userRouter = express.Router();

var router = function() {
    userRouter.route('/signup').post(function (req, res) {
        // sign user up
        console.log('post: /user/signup');
    });

    userRouter.route('/login').post(function (req, res) {
        // log user in
        console.log('post: /user/login');
    });

    userRouter.route('/logout').post(function (req, res) {
        // log user out
        console.log('post: /user/logout');
    });

    userRouter.route('/profile').get(function (req, res) {
        // let user view profile
        console.log('get: /user/profile');
    });

    userRouter.route('/forgotPassword').post(function (req, res) {
        // reset password
        console.log('post: /user/forgortPassword');
    });

    return userRouter;
};

module.exports = router;
