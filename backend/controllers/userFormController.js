

const getUserForms = (req, res) => {
    res.status(200).json({message: 'Get forms'})
}

const postUserForms = (req, res) => {
    res.status(200).json({message: 'Set forms'})
}

const updateUserForms = (req, res) => {
    res.status(200).json({message: `Update form ${req.params.id}`})
}

const deleteUserForms = (req, res) => {
    res.status(200).json({message: `Delete form ${req.params.id}`})
}


module.exports = {
    getUserForms,
    postUserForms,
    updateUserForms,
    deleteUserForms
}