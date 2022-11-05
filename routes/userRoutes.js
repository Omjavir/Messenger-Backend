const express = require('express')
const { register, login, getAllUser, getAUser } = require('../controllers/userController')
const { auth, authorizeRoles } = require('../middlewares/auth')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/allusers',auth, getAllUser)
router.get('/getuser', auth, getAUser)

module.exports = router;