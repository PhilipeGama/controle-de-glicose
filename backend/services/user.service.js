const User = require('./models/user');

const user = User.build({
    name: 'teste',
    username: 'teste1',
    email: 'teste@teste.com',
    password: '123'
})

console.log(user)