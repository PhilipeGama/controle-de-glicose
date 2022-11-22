const userService = require('../services/user.service')
const { validationResult, body } = require('express-validator')

exports.get = async (req, res, next) => {
    try {
        const users = await userService.findAll()

        if (!users) {
            return res.status(500).json({
                data: {
                    error: 'Internal Server Error',
                },
            })
        }
        if (users) {
            return res.status(200).json({
                data: {
                    users: users,
                },
            })
        }
    } catch (error) {
        return error
    }
}

exports.post = async (req, res, next) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const userCreated = await userService.save(req.body)

        if (!userCreated) {
            return res.status(500).json({
                data: {
                    error: 'Internal Server Error',
                },
            })
        }
        if (userCreated) {
            return res.status(201).json({
                data: {
                    message: 'Created user succefully!',
                },
            })
        }
    } catch (error) {
        return error
    }
}

exports.put = async (req, res, next) => {
    try {
        const userUpdated = await userService.update(req.params.id, req.body)

        if (!userUpdated) {
            return res.status(500).json({
                data: {
                    message: 'Internal Server Error',
                },
            })
        }
        if (userUpdated) {
            return res.status(201).json({
                data: {
                    message: 'User updated succesfully',
                },
            })
        }
    } catch (error) {
        return error
    }
}

exports.delete = async (req, res, next) => {
    try {
        const userDeleted = await userService.destroy(req.params.id)

        if (!userDeleted) {
            return res.status(500).json({
                data: {
                    message: 'Internal Server Error',
                },
            })
        }

        if (userDeleted) {
            return res.status(200).json({
                data: {
                    message: 'User deleted succesfully',
                },
            })
        }
    } catch (error) {
        return error
    }
}
