const authService = require('../services/auth.service')

exports.login = async (req, res, next) => {
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
}
