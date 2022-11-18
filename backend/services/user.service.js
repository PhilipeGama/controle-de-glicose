const User = require('../models/user.model')
const bcrypt = require('bcrypt')
require('dotenv').config()

const saltRounds = parseInt(process.env.SALT_ROUNDS)

exports.findAll = async () => {
    try {
        return await User.findAll()
    } catch (error) {
        return null
    }
}

exports.save = async (user) => {
    try {
        const hash = await bcrypt.hash(user.password, 10)
        user.password = hash
        return await User.create(user)
    } catch (error) {
        return error
    }
}

exports.update = async (id, user) => {
    const hash = await bcrypt.hash(user.password, saltRounds, (err, hash) => {})

    const userUpdate = {
        name: user.name,
        email: user.email,
        password: hash,
    }

    try {
        return await User.update(userUpdate, {
            where: {
                id: id,
            },
        })
    } catch (error) {
        return null
    }
}

exports.destroy = async (id) => {
    try {
        return await User.destroy({
            where: {
                id: id,
            },
        })
    } catch (error) {
        return null
    }
}
