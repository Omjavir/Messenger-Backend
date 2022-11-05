const express = require('express');
const { accessChat, fetchUsersChats, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require('../controllers/chatController');
const { auth } = require('../middlewares/auth');
const router = express.Router()

router.get('/accesschat', auth, accessChat)
router.get('/fetchuserchats', auth, fetchUsersChats)
router.post('/creategroup', auth, createGroupChat)
router.put('/renamegroup', auth, renameGroup)
router.put('/addtogroup', auth, addToGroup)
router.put('/removefromgroup', auth, removeFromGroup)

module.exports = router;