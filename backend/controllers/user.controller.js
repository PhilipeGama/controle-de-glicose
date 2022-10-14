const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.findUsers = (req, res, next) => {
    User.findAll().then(users => {
        res.send(users);
    });
}

exports.createUser = (req, res, next) => {
    console.log(req.body);

    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        console.log(hash);
    })

    const user = {

    }
    res.send('createUser');
    //res.send(User.create(req.body));
}

exports.findUserById;