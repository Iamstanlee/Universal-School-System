const Parent = require('../../../models/users/parent');

const register = async (request, response, next) => {
    try {
        const newParent = await Parent.create({
            fullname: request.body.fullname,
            email: request.body.email,
            username: request.body.username,
            phoneNumber: request.body.phoneNumber,
            password: request.body.password,
            confirmPassword: request.body.confirmPassword,
            numOfRegisteredChildren: request.body.numOfRegisteredChildren
        });
        request.user = newParent;
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = register;