const express = require('express');
const { allMessages, sendMessage } = require('../controllers/messageController');
const { auth } = require('../middlewares/auth')
const router = express.Router();

router.get('/:chatId', auth, allMessages)
router.post('/sendMessage', auth, sendMessage)

module.exports = router;