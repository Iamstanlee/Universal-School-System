const Admin = require('../../models/users/admin');
const catchAsyncError = require('../../utils/errorUtils/catchAsyncError');
const errorHandler = require('../../utils/errorUtils/errorHandler');
const responseHandler = require('../../utils/responseHandler');

//Get all the administrators
exports.getAllAdminUsers = catchAsyncError(async (request, response, next) => {
    const allAdminUsers = await Admin.find({});
    return responseHandler(response, allAdminUsers, next, 200, 'Successfully retrieved all the administrators', allAdminUsers.length);
});

exports.getAdmin = catchAsyncError(async (request, response, next) => {
    const adminUser = await Admin.findById(request.params.id);
    if (!adminUser) return errorHandler(404, 'This person is not an administrator or does not exist.');
    return responseHandler(response, adminUser, next, 200, `Retrieved Administrator ${adminUser.fullname}`, 1);
});
