const express = require('express')
const router = express.Router()
const { getUserForms, postUserForms, updateUserForms, deleteUserForms } = require('../controllers/userFormController')

router.route('/').get(getUserForms).post(postUserForms)

router.route('/:id').put(updateUserForms).delete(deleteUserForms)

module.exports = router