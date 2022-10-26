const asyncHandler = require('express-async-handler')

const getUserForms = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Get forms'})
} )

const postUserForms = asyncHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Add a text field')
    }
    res.status(200).json({message: 'Set forms'})
} )

const updateUserForms = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Update form ${req.params.id}`})
} )

const deleteUserForms = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Delete form ${req.params.id}`})
} )


module.exports = {
    getUserForms,
    postUserForms,
    updateUserForms,
    deleteUserForms
}