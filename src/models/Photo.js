const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'Name should be at least 2 characters!'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        match: {
            regex: /^https?:\/\//,
            message: 'Invalid url!'
        },
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [1, 'Age must be one year or older!'],
        max: [100, 'The age must be up to one hundred years!'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [5, 'Description should be at least 5 characters!'],
        maxLength: [50, 'The name must be a maximum of 50 characters!'],
    },
    location: {
        type: String,
        required: [true, 'Location is required!'],
        minLength: [5, 'Location should be at least 5 characters!'],
        maxLength: [50, 'The location must be a maximum of 50 characters!'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    comments: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                required: true,
                ref: 'User',
            },
            message: {
                type: String,
                required: [true, 'Comment message is required!'],
            }
        },
    ],

    // • commentList – an array of objects containing the user's ID and the comment content: [ { userID: '1234',
    // comment: 'Nice photo!'} ]

});


const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;

