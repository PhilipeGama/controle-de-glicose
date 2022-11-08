const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
const secret = process.env.SECRET

const User = require('../models/user.model')

exports.login = async (email, password) => {
    const userFound = await User.findOne({
        where: {
            email: email,
        },
    })

    if (!userFound) {
        return 'user_not_find'
    }

    const { id, name } = userFound

    const passwordMatch = await bcrypt.compare(password, userFound.password)

    if (!passwordMatch) {
        return 'password_invalid'
    }

    if (passwordMatch) {
        const token = jwt.sign({ id, email, name }, secret, {
            expiresIn: '2h',
        })
        return token
    }
}
