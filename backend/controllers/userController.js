const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require("express-async-handler")
const User = require('../models/userModel')
const Admin = require('../models/adminModel')

const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password, adminEmail} = req.body
    if (!name || !email || !password || !adminEmail) {
        res.status(400)
        throw new Error("Please fill in all fields")
    }
    // Check if admin user exists
    const adminExists = await Admin.findOne({email: adminEmail})
    
    if (!adminExists) {
        res.status(400)
        throw new Error("Admin User does not exist")
    }
    // Get the needed admin ID
    const adminID = adminExists._id

    // Check if user exists
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //

    // Create user
    const user = await User.create({
        name, 
        email,
        password: hashedPassword,
        adminID: adminID
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            adminID: user.adminId,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid User Data")
    }
})

const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid Credentials")
    }

})

const getUser = asyncHandler( async (req, res) => {

    res.status(200).json(req.user)
})

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUser
}
