const express =require('express');
const { sendMessage } = require('../controllers/messageControllers');

const router = express.Router();


router.route('/sendmessage').post(sendMessage);



module.exports = router;