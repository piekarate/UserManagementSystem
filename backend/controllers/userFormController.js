const asyncHandler = require('express-async-handler')
const Form = require('../models/formModel')

const getUserForms = asyncHandler( async (req, res) => {
    const forms = await Form.find()

    res.status(200).json(forms)
} )

const postUserForms = asyncHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Add a text field')
    }
    if (!req.body.name) {
        res.status(400)
        throw new Error('Add a name field')
    }

    const form = await Form.create({
        name: req.body.name,
        text: req.body.text
    })

    res.status(200).json(form)
} )

const updateUserForms = asyncHandler( async (req, res) => {
    const form = await Form.findById(req.params.id)

    if (!form) {
        res.status(400)
        throw new Error('Goal not found')
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

    await form.remove()

    res.status(200).json({ id: req.params.id })
} )


module.exports = {
    getUserForms,
    postUserForms,
    updateUserForms,
    deleteUserForms
}