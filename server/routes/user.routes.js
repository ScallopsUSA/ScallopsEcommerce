const UserController = require('../controllers/user.controller');
// const { authenticate } = require('../config/jwt.config')
module.exports = function(app){
    app.get('/api', UserController.index);
    app.post('/api/users', UserController.createUser);
    app.get('/api/users', UserController.getAllUsers);
    app.post('/api/users/login', UserController.loginUser);
    app.get('/api/users/:id', UserController.getUser);
    app.put('/api/users/:id', UserController.updateUser);
    app.delete('/api/users/:id', UserController.deleteUser);
    app.delete('/api/users/logout', UserController.logout);
    app.get('/api/hm', UserController.hm);
}