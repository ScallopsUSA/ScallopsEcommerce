const UserController = require('../controllers/user.controller');
const router = require('express').Router();

const passport = require('passport');
require("../config/passport");
// const { authenticate } = require('../config/jwt.config')
module.exports = function(app){
    app.get('/api', UserController.index);
    
    app.get('/api/users', UserController.getAllUsers);
    app.get('/api/users/:id', UserController.getUser);
    // app.get('/api/hm', UserController.hm);

    // app.get('/auth/google', UserController.googleAuthentication);
    // app.get('/auth/google/fail', UserController.googleFail);
    // app.get('/auth/google/callback', UserController.googleCallback);
    // app.get(
    //     '/auth/google', 
    //     passport.authenticate('google', { scope: ['profile', 'email'] })
    // );
    // app.get('/auth/google/fail', UserController.googleFail);
    // app.get(
    //     '/auth/google/callback', 
    //     passport.authenticate("google", { successRedirect: "/", failureRedirect: "/auth/google/fail" }),
    //     (req, res) => {
    //         const token = req.user.token;
    //         res.redirect("http://localhost:3000?token="+token);
    //     }
    // );
    
    app.post('/api/users', UserController.createUser);
    app.post('/api/users/login', UserController.loginUser);
    
    app.put('/api/users/:id', UserController.updateUser);

    app.delete('/api/users/:id', UserController.deleteUser);
    app.delete('/api/users/logout', UserController.logout);
}