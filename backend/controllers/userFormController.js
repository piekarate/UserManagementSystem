const asyncHandler = require('express-async-handler')
const Form = require('../models/formModel')
const User = require('../models/userModel')

const getUserForms = asyncHandler( async (req, res) => {
    const forms = await Form.find({ user: req.user.id })

    res.status(200).json(forms)
} )

const postUserForms = asyncHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Add a text field')
    }

    const form = await Form.create({
        name: req.user.name,
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(form)
} )

const updateUserForms = asyncHandler( async (req, res) => {
    const form = await Form.findById(req.params.id)

    if (!form) {
        res.status(400)
        throw new Error('Goal not found')
    }
    
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the user that posted 
    if (form.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User nlt authorizes')
    }

    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedForm)
} )

const deleteUserForms = asyncHandler( async (req, res) => {
    const form = await Form.findById(req.params.id)

    if (!form) {
        res.status(400)
        throw new Error('Goal not found')
    }
    
    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    // Make sure the logged in user matches the user that posted 
    if (form.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User nlt authorizes')
    }

    await form.remove()

    res.status(200).json({ id: req.params.id })
} )


module.exports = {
    getUserForms,
    postUserForms,
    updateUserForms,
    deleteUserForms
}