const authService = require('../services/auth.service')
const { body, validationResult } = require('express-validator')

exports.login = async (req, res, next) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body
        const auth = await authService.login(email, password)
        if (auth === 'user_not_find' || auth === 'password_invalid') {
            return res.status(401).json({
                data: {
                    error: 'Invalid login',
                },
            })
        }
        return res.status(200).json({
            data: {
                token: auth,
            },
        })
    } catch (error) {
        return error
    }
}
