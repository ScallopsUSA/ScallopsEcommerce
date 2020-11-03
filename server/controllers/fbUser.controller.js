const { FbUser } = require('../models/FbUser.model');
const jwt = require('jsonwebtoken')

// [ LOGIN / REG ]
module.exports.createFbUser = (request, response) => {
    const { firstName, lastName, email, password, confirmPassword } = request.body;
    FbUser.create({
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

// [ GET ]
module.exports.getAllFbUsers = (request, response) => {
    FbUser.find({})
        .then(users => response.json(users))
        .catch(err => response.json(err))
}

module.exports.getFbUser = (request, response) => {
    FbUser.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}


// [ PUT ]
module.exports.updateFbUser = (request, response) => {
    FbUser.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedFbUser => response.json(updatedFbUser))
        .catch(err => response.json(err))
}

// [ DELETE ]
module.exports.deleteFbUser = (request, response) => {
    FbUser.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
