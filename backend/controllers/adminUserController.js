const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')
const User = require('../models/userModel')

const getAdminUsers = asyncHandler ( async (req, res) => {
    // Users not properly assigned to admins
    console.log(req.admin)
    const users = await User.find({ adminID: req.admin._id })

    res.status(200).json(users)
})


module.exports = {
    getAdminUsers
}