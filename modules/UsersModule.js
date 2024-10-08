const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'Username is too short'],
        maxlength: [20, 'Username is too long'],
        trim: true,//to handle name before save from leading and trailing whitespaces
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+.\S+$/, 'Please enter a valid email address'],// checks if the email has a valid format
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password is too short'],
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Add more roles as needed
        default: 'user',
    },
    phone: {
        type: String,
        trim: true,
    },
    token: {
        type: String
    },
    image: {
        public_id: {
            type: String,
            required: false
        },
        url: {
            
            type: String,
            required: false
        }
    },
created_at: {
    type: Date,
    default: Date.now
},
updated_at: {
    type: Date,
    default: Date.now
}
    // Add more fields as needed for your user model
    // ...
},);

const User = mongoose.model('User', userSchema);

module.exports = User;