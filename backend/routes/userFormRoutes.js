const express = require('express')
const router = express.Router()
const { getUserForms, postUserForms, updateUserForms, deleteUserForms } = require('../controllers/userFormController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getUserForms).post(protect, postUserForms)

router.route('/:id').put(protect, updateUserForms).delete(protect, deleteUserForms)

module.exports = router