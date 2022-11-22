const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require("express-async-handler")
const Admin = require('../models/adminModel')

const registerAdmin = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please fill in all fields")
    }

    // Check if user exists
    const userExists = await Admin.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }
    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const admin = await Admin.create({
        name, 
        email, 
        password: hashedPassword,
        privileges: true
    })

    if (admin) {
        res.status(201).json({
            _id: admin.id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id),
            privileges:  admin.privileges
        })
    } else {
        res.status(400)
        throw new Error("Invalid User Data")
    }
})

const loginAdmin = asyncHandler( async (req, res) => {
    const {email, password} = req.body

    const admin = await Admin.findOne({email})

    if (admin && (await bcrypt.compare(password, admin.password))) {
        res.json({
            _id: admin.id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id),
            privileges:  admin.privileges
        })
    } else {
        res.status(400)
        throw new Error("Invalid Credentials")
    }
})

const getAdmin = asyncHandler( async (req, res) => {
    res.status(200).json(req.admin)
})



const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerAdmin,
    loginAdmin,
    getAdmin
}