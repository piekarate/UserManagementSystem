const asyncHandler = require('express-async-handler')

const getUserForms = async (req, res) => {
    res.status(200).json({message: 'Get forms'})
} 

const postUserForms = async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Add a text field')
    }
    res.status(200).json({message: 'Set forms'})
} 

const updateUserForms = async (req, res) => {
    res.status(200).json({message: `Update form ${req.params.id}`})
} 

const deleteUserForms = async (req, res) => {
    res.status(200).json({message: `Delete form ${req.params.id}`})
} 


module.exports = {
    getUserForms,
    postUserForms,
    updateUserForms,
    deleteUserForms
}