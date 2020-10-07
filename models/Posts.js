const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    venue:{
        type: String,
        required: true,
    },
    abstract:{
        type: String,
        required: true,
    },
});

mongoose.export = mongoose.model('Posts', PostSchema);