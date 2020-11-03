const mongoose = require('mongoose');

const FbUserSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required:[true,"First name is required"] 
    },
    lastName: { 
        type: String
    },
    // username: {
    //     type: String,
    //     required:[true, "Username is required"]
    // },
    email: {
        type: String,
        required:[true,"Email is required"]
    }
}, { timestamps: true });


module.exports.FbUser = mongoose.model('FbUser', FbUserSchema);