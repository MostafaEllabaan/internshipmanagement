const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password:{
        type:  String,
        required: true,
        minlenght: 7,
    },
}, {
    timestamps: true,
}
);

mongoose.export = mongoose.model('User', UserSchema);
