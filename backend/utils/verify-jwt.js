const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.SECRET

module.exports = verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token']
    if (!token)
        return res.status(401).json({
            auth: false,
            message: 'No token provided.',
        })

    jwt.verify(token, secret, (err, decoded) => {
        if (err)
            return res.status(401).json({
                data: {
                    auth: false,
                    message: 'Failed on authenticate token',
                },
            })
        next()
    })
}
