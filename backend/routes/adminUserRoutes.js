const express = require('express')
const router = express.Router()
const { getAdminUsers } = require('../controllers/adminUserController')
const { protect } = require("../middleware/authMiddleware")

router.get('/', protect, getAdminUsers)

module.exports = router