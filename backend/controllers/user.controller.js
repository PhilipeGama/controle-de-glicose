const User = require('../models/user.model')
const bcrypt = require('bcrypt')
require('dotenv').config()

const saltRounds = parseInt(process.env.SALT_ROUNDS)

exports.getUsers = (req, res, next) => {
    User.findAll()
        .then((users) => {
            res.send(users)
        })
        .catch((err) => {
            console.log(err)
        })
}

exports.postUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
        }
        const userCreated = User.create(user)
            .then((data) => {
                console.log(data)
                res.send(userCreated)
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

exports.putUser = (req, res, next) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: hash,
        }
        const userCreated = User.update(user, {
            where: {
                id: req.body.id,
            },
        })
            .then((data) => {
                console.log(data)
                res.send(userCreated)
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

exports.deleteUser = (req, res, next) => {
    const id = req.body.id
    User.destroy({
        where: {
            id: id,
        },
    })
        .then((data) => {
            console.log(data)
            res.send(userCreated)
        })
        .catch((err) => {
            console.log(err)
        })
}
