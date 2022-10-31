const userService = require('../services/user.service')

exports.get = async (req, res, next) => {
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
}

exports.post = async (req, res, next) => {
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
}

exports.put = async (req, res, next) => {
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
}

exports.delete = async (req, res, next) => {
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
}
