const UserController = require('../controllers/user.controller');

module.exports = function(router) {
    router.get('/auth/google', UserController.googleAuthentication );
    router.get('/auth/google/fail', UserController.googleFail );
    router.get('/auth/google/callback', UserController.googleCallback );
}
