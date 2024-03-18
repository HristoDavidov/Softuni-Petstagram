const User = require('../models/User');

exports.login = (username, password) => {

};

exports.register = (userData) => {
    const user = User.findOne({ username: userData.username });

    if (user) {
        throw new Error('Username already exists!');
    };

    return User.create(userData);
};