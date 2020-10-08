const { User } = require('../models/user.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config();
const axios = require("axios");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
   
module.exports.createUser = (request, response) => {
    const { firstName, lastName, email, password, confirmPassword } = request.body;
    User.create({
        firstName,
        lastName,
        // username,
        email,
        password,
        confirmPassword

    })
        .then(user => {
            const token = jwt.sign(
                {
                    id: user._id,
                    username: user.username
                },
                process.env.SECRET_KEY
            );
            response
                .cookie("userToken", token, {
                httpOnly: true
                })
                .json({status:"Success", user:user})
        })
        .catch(err => response.status(400).json(err));
    
}


module.exports.loginUser = async (request, response) => {
    const user = await User.findOne({email:request.body.email});

    if(user === null){
        return response.sendStatus(400);
    }

    const correctPassword = await bcrypt.compare(request.body.password, user.password);

    if(!correctPassword){
        return response.sendStatus(400)
    }

    const userToken = jwt.sign(
        {
            id:user._id,
            username:user.username
        }, 
        process.env.SECRET_KEY);
    
    response
        .cookie('userToken', userToken, {
            httpOnly:true
        })
        .json({ msg:"success!", userToken })
}


module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(users => response.json(users))
        .catch(err => response.json(err))
}

module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.json(err))
}

module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.logout = (_, response) => {
    response.clearCookie('userToken');
    response.sendStatus(200);
}

module.exports.hm = (req, res) => {
    
}