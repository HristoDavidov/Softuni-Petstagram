const User = require('../models/User');
const jwt = require('../lib/jwt');
const bcrypt = require('bcrypt');

const SECRET = '0ada2b82-ca46-4d69-88ae-1c936c27635a';

exports.login = async (username, password) => {

    //find user by username
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('Invalid user or password!');
    };

    //check password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Invalid user or password!');
    };

    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });

    return token;

};

exports.register = async (userData) => {
    const user = await User.findOne({ username: userData.username });

    if (user) {
        throw new Error('Username already exists!');
    };

    return User.create(userData);
};