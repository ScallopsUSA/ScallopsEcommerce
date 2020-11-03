const { GUser } = require('../models/GUser.model');
const jwt = require('jsonwebtoken')

// [ LOGIN / REG ]
module.exports.createGUser = (request, response) => {
    const { firstName, lastName, email, password, confirmPassword } = request.body;
    GUser.create({
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
module.exports.getAllGUsers = (request, response) => {
    GUser.find({})
        .then(users => response.json(users))
        .catch(err => response.json(err))
}

module.exports.getGUser = (request, response) => {
    GUser.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}


// [ PUT ]
module.exports.updateGUser = (request, response) => {
    GUser.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedGUser => response.json(updatedGUser))
        .catch(err => response.json(err))
}

// [ DELETE ]
module.exports.deleteGUser = (request, response) => {
    GUser.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
